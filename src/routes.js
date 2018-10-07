import React from 'react';
import { Route } from 'react-router';
import { GenerateRoute } from './utils';

export default (
	<Route component={ require('./pages/root') }>
		{ GenerateRoute({
			paths: ['/', '/home', 'dashboard'],
			component: require('./pages/home.js')
		}) }
		{ GenerateRoute({
			paths: ['/jobs/:search'],
			component: require('./pages/search.js')
		}) }
	</Route>
);
