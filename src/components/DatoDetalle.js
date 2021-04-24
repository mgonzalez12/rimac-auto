import React from 'react';
import '../css/datos.css';
import { Link } from "react-router-dom";
import ImageAuto from '../images/auto.png';

class DatoDetalle extends React.Component {

    constructor(props) {
       super(props)
       this.state = { 
           fecha: '2019',
           fecha1: '2020',
           marca:"Wolkswagen",
           option1:"option1",
           option2:"option2",
           precio:"$14,300",
           items:[],
           loading:false
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                items:response.results,
                loading:true
            })
        })
    }


    render() {
        return (
            <div className="col-sm">
                <div className="card border-0  ">
                    <div className="card-body ">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                   <Link to="/" className="volveratras" ><i className="fas fa-undo-alt boton d-none d-sm-none d-md-block "></i> <span className="volver d-none d-sm-none d-md-block">Volver</span> </Link>
                                <span className="mt-5"></span>

                                    <h1>¡Hola, <span className="nombrecolor">{this.state.items.map(item => ( <i> {item.name.first} </i>))}  </span></h1>
                                    <p>Completa los datos de tu auto</p>

                                </div>
                                <div className="col-sm">
                                    <select className="form-select form-select-lg" aria-label="Default select example">
                                        <option value={this.state.fecha} className="letrasselect">{this.state.fecha}</option>
                                        <option value={this.state.fecha1} className="letrasselect">{this.state.fecha1}</option>
                                    </select>

                                    <select className="form-select form-select-lg mt-4" aria-label="Default select example" required>
                                        <option value={this.state.marca} className="letrasselect">{this.state.marca}</option>
                                    </select>

                                <div>
                                    <div className="form-check mt-2 ">
                                            <label className="form-check-label text-ta form-check-inline" htmlFor="flexCheckDefault">
                                                ¿Tu auto es a gas?
                                        </label>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={this.state.option1} />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Si</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={this.state.option2} defaultChecked  />
                                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
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
                                                <input type="text" className="form-control text-center form-control-lg inpletr " aria-label="Text input with segmented dropdown button" value={this.state.precio} />
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