import React from 'react';
import '../../css/gracias.css';
import { Link } from "react-router-dom";
import Gracias from '../../images/gracias.png';

class GraciaDetalle extends React.Component {

    render() {
        return (
            <div className="col-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center mt-5">
                                <span className="mt-5"></span>
                                    <h1><span className="nombrecolor">¿Te damos la bienvenida!</span></h1>
                                    <h1>Cuenta con nosotros <br className="d-none d-sm-none d-md-block"/> para proteger tu vehículo </h1>
                                </div>
                            
                                <div className="col-sm  text-justify">
                                    <div className="row mt-3">
                                        <div className="col-sm-3 d-none d-sm-none d-md-block"> </div>
                                        <div className="col-sm">
                                        Enviaremos la confirmación de compra de tu Plan Vehícular Tracking 
                                             a tu correo:  <br/>
                                             joel.sanchez@gmail.com
                                        <br/>
                                            
                                             <Link to="/" className="btn btn-danger btn-lg mt-3 segurobutton">CÓMO USAR MI SEGURO </Link>
                                            
                                        </div>
                                        <div className="col-sm-3 d-none d-sm-none d-md-block"> </div>
                                    </div>
                                 
                                </div>
                            </div>
                    </div>
            </div>
         
        );
    }
}

export default GraciaDetalle;