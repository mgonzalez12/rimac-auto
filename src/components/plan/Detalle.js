import React from 'react';
import '../../css/datos.css';
import { Link } from "react-router-dom";
import Usuario from '../../images/usuario.png';
import Premio from '../../images/trofeo.png';
import Llantas from '../../images/llantas.png';
import Choque from '../../images/choque.png';

class Detalle extends React.Component {

    render() {
        return (
            <div className="col-sm">
                <div className="card border-0 ">
                    <div className="card-body ">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <Link to="/" ><i class="fas fa-undo-alt boton d-none d-sm-none d-md-block"></i> <span className="volver d-none d-sm-none d-md-block">Volver</span> </Link>
                                    <span className="mt-5"></span>

                                    <h1>Mira las coberturas</h1>
                                    <p>Conoce las coberturas para tu plan</p>

                                </div>
                                <div className="col-sm">
                                    <div className="card card-border" id="card-border">
                                        <div className="card-body" id="imagen">

                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="ptext">
                                                        <p className="texto1 mt-5">Placa: C2U-114</p>
                                                        <h6>Wolkswagen 2019</h6>
                                                        <h6>Golf</h6>

                                                        <a href="">EDITAR</a>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <img src={Usuario} className="" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-sm mt-5">
                                            <h6>Agregar o quitar coberturas</h6>

                                            <nav>
                                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button className="nav-link active textsize border-0" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><strong> PROTEGE A <br /> TU AUTO</strong></button>
                                                    <button className="nav-link textsize border-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><strong>PROTEGE A LOS <br /> QUE TE RODEAN</strong></button>
                                                    <button className="nav-link textsize border-0" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"><strong>MEJORA TU <br /> PLAN</strong></button>
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <img src={Llantas} className="" />
                                                        </div>
                                                        <div className="col-sm">
                                                            <h6>Llanta robada</h6>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                                <label className="form-check-label" for="flexSwitchCheckChecked">Quitar</label>
                                                            </div>
                                                    He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <hr/>
                                                        <div className="col-sm-4">
                                                            <img src={Choque} className="" />
                                                        </div>
                                                        <div className="col-sm">
                                                            <h6>Choque y/o pasarte la luz <br/>roja</h6>
                                                            <div class="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
                                                                <label className="form-check-label" for="flexSwitchCheckChecked">Agregar</label>
                                                            </div>
                                                    </div>

                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h3>$36.00</h3>
                                          mensuales
                                        </div>
                                        <div className="col-sm d-none d-sm-none d-md-block">
                                            <img src={Premio} className="" />
                                        </div>
                                    </div>
                                    <hr className="hrstyle d-none d-sm-none d-md-block" />

                                    <div className="row">
                                        <div className="col-sm d-none d-sm-none d-md-block">
                                            <h6> El precio incluye </h6>
                                            <i className="fas fa-check "></i> LLanta de repuesto <br />
                                            <i className="fas fa-check"></i> Analisis <br />
                                            <i className="fas fa-check "></i> Aros gratis <br />
                                            <span className="mt-5"></span>
                                            <br /><br />
                                           
                                        </div>
                                         <Link to="/gracias" className="btn btn-danger btn-lg mt-3 loquiero">LO QUIERO </Link>
                                        <div className="col-sm">

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Detalle;