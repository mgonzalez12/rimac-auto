import React from 'react';
import '../css/datos.css';
import { Link } from "react-router-dom";

class VistaDatos extends React.Component {

    render() {
        return (
            <div className="col-sm-4">
                <div className="card border-0  colorfondo3">

                    <div className="d-block d-sm-block d-md-none ">

                        <div className="row">
                            <div className="col-sm-6 ">
                               <span className="pasos"> <i className="fas fa-arrow-circle-left"></i> <strong>PASO 1 De 2 </strong> </span>
                            </div>
                            <div className="col-sm-6">
                                <div className="progress">
                                    <div className="progress-bar progreso" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="card-body mt-5  d-none d-sm-none d-md-block" align="center">

                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-2">
                                <div className="uno">1</div>
                            </div>
                            <div className="col-sm">
                                <p> Datos del Auto </p>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-2">
                                <div className="dos">2</div>
                            </div>
                            <div className="col-sm">
                                <p className="textovista"> Arma tu plan </p>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default VistaDatos;