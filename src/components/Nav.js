import React from 'react';
import '../css/navprincipal.css';
import { Link } from "react-router-dom";
import ImageLogo from '../images/logo.png';

class Nav extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light navdise  d-block d-sm-block d-md-none ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" ><img src={ImageLogo}  className="logo" /></Link>
                    <p className="numerostyle1" > <span className="telblue"> <i className="fas fa-phone-alt"></i>(01) 411 6001 </span> </p>
                  
                </div>
            </nav>

        );
    }
}

export default Nav;