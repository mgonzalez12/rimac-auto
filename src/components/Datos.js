import React from 'react';
import '../css/style.css';
import { Link} from "react-router-dom";

class Datos extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
          lname: '',
          email: '',
          password: '',
          confirmPassword: '',
          formSuccess: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
      }
    

    render() {
    return (
        <div >
            <div className="container mt-5">
            <div className="row">
                <div className="col-sm-3 d-none d-sm-none d-md-block "> </div>
                <div className="col-sm col-xs-12">
                   <h3>Déjanos tus datos</h3>
                        <div className="card border-0">
                            <div className="card-body">
                            <form >
                            <div className="">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <select className="form-select form-select-lg" aria-label="Default select example">
                                            <option value="DNI" className="letrasselect">DNI</option>
                                            <option value="CE" className="letrasselect">CARNET EXTRANJERIA</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-lg numdoc" type="text" placeholder="Nro. de doc" />
                                    </div>
                                </div>
                                </div>
                                 <input className="form-control form-control-lg mt-3" type="text" placeholder="Celular" 
                                 value={this.state.name}
                                 onChange={(event) => this.handleUserInput(event)}
                                  required pattern="[0-9]+"/>

                                 <input className="form-control form-control-lg mt-3" type="text" placeholder="Placa"  required pattern="[A-Za-z0-9]+" />
                            
                                    <div className="form-check mt-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                             <label className="form-check-label text-ta" for="flexCheckDefault">
                                               Acepto la <span className="em">Política de Protección de Datos <br/>
                                               Personales</span> y los <span className="em">Términis y Condiciones</span>
                                        </label>
                                    </div>
                              

                                 <Link to="/sinDato" className="btn btn-danger btn-lg mt-3" disabled={!this.state.name} >COTÍZALO</Link>
                                 </form>
                            </div>
                        </div>
                </div>
                <div className="col-sm-3 d-none d-sm-none d-md-block "> </div>
            </div>
            </div>
        </div>
      );
    }
}
    
export default Datos;