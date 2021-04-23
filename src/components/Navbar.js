import React from 'react';
import '../css/nav.css';
import { Link } from "react-router-dom";
import ImageLogo from '../images/logo.png';

class Navbar extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light  d-none d-sm-none d-md-block">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" ><img src={ImageLogo}  className="imagefondo" /></Link>
  
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#"></a></li>
                            <li className="nav-item"><a className="nav-link" href="#"></a></li>
                            <li className="nav-item"> <a className="nav-link" href="#"></a></li>
                        </ul>
                        <span className="navbar-text">
                           <p className="numerostyle1 d-none d-sm-none d-md-block" >¿Tienes alguna duda?  <span className="telblue"> <i className="fas fa-phone-alt"></i>(01) 411 6001 </span> </p>
                        </span>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;