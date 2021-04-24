import React from 'react';
import '../css/style.css';
import { Link ,withRouter } from "react-router-dom";

class Datos extends React.Component {
  
    constructor() {
        super();
        this.state = {
            documento: "",
            celular: "",
            placa: "" 
        }
       
      }
    
      handledocumentoChange = evt => {
        this.setState({ documento: evt.target.value });
      };
    
      handlecelularChange = evt => {
        this.setState({ celular: evt.target.value });
      };

      handleplacaChange = evt => {
        this.setState({ placa: evt.target.value });
      };

      handleSubmit = async e => {
        e.preventDefault();
        // this.setState({ loading: true, error: null });
    
        try {
          // await api.badges.create(this.state.form);
          // this.setState({ loading: false });
           console.log("Me diste click")
          this.props.history.push('/sinDato');
          
    
        } catch (error) {
          // this.setState({ loading: false, error: error });
        }
      };


    render() {
      const { documento, celular ,placa} = this.state;
       const isEnabled = documento.length > 0 && celular.length > 0 && placa.length > 0;
    return (
        <div >
            <div className="container mt-5">
            <div className="row">
                <div className="col-sm-3 d-none d-sm-none d-md-block "> </div>
                <div className="col-sm col-xs-12">
                   <h3>Déjanos tus datos</h3>
                        <div className="card border-0">
                            <div className="card-body">
                            <form  onSubmit={this.handleSubmit} >
                            <div className="">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <select className="form-select form-select-lg" aria-label="Default select example">
                                            <option value="DNI" className="letrasselect">DNI</option>
                                            <option value="CE" className="letrasselect">CARNET EXTRANJERIA</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-8">
                                        <input className="form-control form-control-lg numdoc" 
                                        type="text" placeholder="Nro. de doc" 
                                        value={this.state.documento}
                                        onChange={this.handledocumentoChange}
                                        pattern="^[0-9]+" min="6" title="Solo Número"
                                        required
                                        />
                                    </div>
                                </div>
                                </div>
                                 <input className="form-control form-control-lg mt-3" 
                                 type="text" placeholder="Celular" 
                                 value={this.state.celular}
                                 onChange={this.handlecelularChange}
                                  required pattern="[0-9]+"  min="9" title="Solo Número"/>

                                 <input className="form-control form-control-lg mt-3" 
                                 type="text" placeholder="Placa"
                                 value={this.state.placa}
                                 onChange={this.handleplacaChange}  
                                 required pattern="[A-Za-z0-9]+" />
                            
                                    <div className="form-check mt-2">
                                        <input className="form-check-input" type="checkbox"  id="flexCheckDefault"  />
                                             <label className="form-check-label text-ta" htmlFor="flexCheckDefault">
                                               Acepto la <span className="em">Política de Protección de Datos <br/>
                                               Personales</span> y los <span className="em">Términis y Condiciones</span>
                                        </label>
                                    </div>
                              

                                 {/* <Link to="/sinDato"></Link> */}
                                    <button disabled={!isEnabled}   className="btn btn-danger btn-lg mt-3">COTÍZALO</button>
                                  
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
    
export default withRouter(Datos);