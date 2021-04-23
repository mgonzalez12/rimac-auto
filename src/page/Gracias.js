import React, { useState } from 'react';
import GraciaDetalle from '../components/gracias/GraciaDetalle';
import GraciaVista from '../components/gracias/GraciaVista';
import Nav from '../components/Nav';
import Navbar from '../components/Navbar';


const Gracias = () => {

    return (
      <div>
         <Navbar/>
         <Nav />
         <div className="container-fuid">
                <div className="row">
                 <GraciaVista />
                 <GraciaDetalle />
                </div>
         </div>
      </div>
    );
  }
  
  export default Gracias;