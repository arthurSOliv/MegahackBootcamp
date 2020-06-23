import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

const Footer = (props) => {
    const currentPath = window.location.pathname;
    return(
        <Router>
            {!currentPath.includes('userpage') && !currentPath.includes('storepage') ?
            <footer className="site-footer">
                <div className="container">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by Seek.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        </div>
                    </div>
                </div>
            </footer>
            : null }
        </Router>
    )
}

export default Footer;