const express = require('express');
const app = express();
const path = require('path');
const httpProxy = require('http-proxy');
const url = require("url");
const fs = require("fs");

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT || 4000 : 3000;
const publicPath = isProduction ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'src');

const request = require('request');
const cheerio = require('cheerio');

app.set("view options", {layout: false});
app.use(express.static(publicPath));

// We only want to run the workflow when not in production
if (!isProduction) {

    const Webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require('./webpack.config.js');
    const proxy = httpProxy.createProxyServer();

    // First we fire up Webpack an pass in the configuration we
    // created
    var bundleStart = null;
    const compiler = Webpack(webpackConfig);

    // We give notice in the terminal when it starts bundling and
    // set the time it started
    compiler.plugin('compile', function() {
        console.log('Bundling...');
        bundleStart = Date.now();
    });

    // We also give notice when it is done compiling, including the
    // time it took. Nice to have
    compiler.plugin('done', function() {
        console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
    });

    const bundler = new WebpackDevServer(compiler, {
        // We need to tell Webpack to serve our bundled application
        // from the build path. When proxying:
        // http://localhost:3000/build -> http://localhost:8080/build
        publicPath: '/build/',

        // Configure hot replacement
        hot: true,

        historyApiFallback: true,

        // The rest is terminal configurations
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    // We fire up the development server and give notice in the terminal
    // that we are starting the initial bundle
    bundler.listen(8080, 'localhost', function () {
        console.log('Bundling project, please wait...');
    });

    app.get('/search/:search', function (req, res) {
       let search = req.params.search;

       let results = [], pay = '', id = '';
       request('https://www.freelancer.com/jobs/?keyword=' + search, function(err, resp, html) {
           if (!err){
             const $ = cheerio.load(html);
             //console.log(html);

             $('.JobSearchCard-item').each(function(i, element){
               var $el = $(this);

               id = $el.find('.JobSearchCard-primary-heading-link').attr('href');
               pay = $el.find('JobSearchCard-primary-price').text();

               results.push({
                 id: id,
                 title: $el.find('.JobSearchCard-primary-heading-link').text().trim(),
                 pay: pay,
                 desc: $el.find('.JobSearchCard-primary-description').text().trim()
               });
             })

             res.json({results: results});
           } else {
             res.json({error: err});
           }
       });
     })

    // Any requests to localhost:3000/build is proxied
    // to webpack-dev-server
    app.all('/build/*', function (req, res) {
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });

    // It is important to catch any errors from the proxy or the
    // server will crash. An example of this is connecting to the
    // server when webpack is bundling
    proxy.on('error', function (e) {
        console.log('Could not connect to proxy, please try again...');
    });
}

// app.use(express.static('public'));

app.all('*', function (req, res) {
    var uri = url.parse(req.url).pathname,
        filename = path.join(process.cwd(), uri);

    fs.exists(filename, function(exists) {
        if (!exists) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not Found\n");
            res.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) filename += '/index.html';

        fs.readFile(filename, "binary", function(err, file) {
            if(err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(err + "\n");
                res.end();
                return;
            }

            res.writeHead(200);
            res.write(file, "binary");
            res.end();
        });
    });
    // res.sendFile(`${publicPath}/index.html`);
});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});
