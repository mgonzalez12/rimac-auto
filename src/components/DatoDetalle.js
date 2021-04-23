import React from 'react';
import '../css/datos.css';
import { Link } from "react-router-dom";
import ImageAuto from '../images/auto.png';

class DatoDetalle extends React.Component {

    render() {
        return (
            <div className="col-sm">
                <div className="card border-0  ">
                    <div className="card-body ">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                   <Link to="/" ><i className="fas fa-undo-alt boton d-none d-sm-none d-md-block"></i> <span className="volver d-none d-sm-none d-md-block">Volver</span> </Link>
                                <span className="mt-5"></span>

                                    <h1>¡Hola, <span className="nombrecolor">Juan</span></h1>
                                    <p>Completa los datos de tu auto</p>

                                </div>
                                <div className="col-sm">
                                    <select className="form-select form-select-lg" aria-label="Default select example">
                                        <option value="2017" className="letrasselect">2017</option>
                                        <option value="2018" className="letrasselect">2018</option>
                                        <option value="2019" className="letrasselect">2019</option>
                                        <option value="2020" className="letrasselect">2020</option>
                                    </select>

                                    <select className="form-select form-select-lg mt-4" aria-label="Default select example" required>
                                        <option value="2017" className="letrasselect">Wolkswagen</option>
                                        <option value="2018" className="letrasselect">Ford</option>
                                    </select>

                                <div>
                                    <div className="form-check mt-2 ">
                                            <label className="form-check-label text-ta form-check-inline" for="flexCheckDefault">
                                                ¿Tu auto es a gas?
                                        </label>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" for="inlineRadio1">Si</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked />
                                                <label className="form-check-label" for="inlineRadio2">No</label>
                                            </div>
                                    </div>
                                </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm">
                                            <h6>Indica la suma asegurada</h6>
                                            <p className="inpletr">MIN $12,500 | MAX $16,500</p>
                                            <Link to="/plan" className="btn btn-danger btn-lg mt-3 continuar">CONTINUAR </Link>
                                        </div>
                                        <div className="col-sm">
                                            <div className="input-group mb-3 precios">
                                                <button type="button" className="btn btn-outline-secondary btn-lg "> - </button>
                                                <input type="text" className="form-control text-center form-control-lg inpletr " aria-label="Text input with segmented dropdown button" value="$14,300" />
                                                <button type="button" className="btn btn-outline-secondary btn-lg "> + </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm d-none d-sm-none d-md-block">
                                    AYUDA
                                    <hr className="hrstyle" />
                                    <div className="row">
                                        <div className="col-sm">
                                            ¿No encuentras <br /> el modelo ?
                                            <span className="mt-5"></span>
                                            <br /><br />
                                            <a href="" id="taclick">CLICK AQUÍ</a>
                                        </div>
                                        <div className="col-sm">
                                            <img src={ImageAuto} />
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

export default DatoDetalle;