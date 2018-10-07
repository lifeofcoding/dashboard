import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Results from '../components/Results';
import SideBarMenu from '../components/SideBarMenu';
import Header from '../components/Header';
import MobileHeader from '../components/mobile/Header';

class Search extends Component {
    render() {
        return (
            <div id="viewport">
                <MobileHeader />

                <SideBarMenu />

                <div className="page-container">
                    <Header />

                    <Results />
                </div>
            </div>
        );
    }
}

export default Search;
