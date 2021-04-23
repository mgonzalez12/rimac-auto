import React from 'react'
import Datos from '../components/Datos';
import Nav from '../components/Nav';
import Numeros from '../components/Numeros';
import '../css/style.css';
import ImageFondo from '../images/fondo.png';
import FondoResponsive from '../images/fondo_responsive.png';


const Home = () => {

    return (
        <div >
            <div className="container-fuid">
                <div className="row">

                <Nav className="d-block d-sm-block d-md-none" />   
                   
                    <div className="col-sm-5">
                        <div className="card border-0  colorfondo">
                         
                        <img src={ImageFondo}  className="imagefondo d-none d-sm-none d-md-block" />
                        <img src={FondoResponsive}  className="imagefondo d-block d-sm-block d-md-none" />
                            <div className="card-body ">
                                <div className="centerTitle ">
                                    <p><strong>¡NUEVO! </strong> </p>
                                    <h2 className="vsegurocolor">Seguro <span className="vcolor"> Vehicular
                                    </span>
                                    </h2>
                                    <h2 className="text-justify ptitle" > Tracking</h2>

                                    <div className="textprinc">
                                        <p className="colortexto texto">
                                            Cuentanos donde le haras <br className="d-block d-sm-block d-md-none"/> seguimiento a tu 
                                            <br  className="d-none d-sm-none d-md-block" />
                                            <span className="textseguro" >seguro</span> </p>
                                        <p className="colortexto d-none d-sm-none d-md-block">@2020 RIMAC Seguros y Reaseguros </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm"> 
                    <div className="card border-0">
                            <div className="card-body">
                               
                                <Numeros />
                                <div>
                                    <Datos/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    );
}

export default Home;