import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Dashboard from '../components/Dashboard';
import SideBarMenu from '../components/SideBarMenu';
import Header from '../components/Header';
import MobileHeader from '../components/mobile/Header';

class Home extends Component {
    render() {
        return (
            <div id="viewport">
                <MobileHeader />

                <SideBarMenu />

                <div className="page-container">
                    <Header />

                    <Dashboard />
                </div>
            </div>
        );
    }
}

export default Home;
