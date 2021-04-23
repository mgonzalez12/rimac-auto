import React from 'react';
import Nav from '../components/Nav';
import Navbar from '../components/Navbar';
import Armar from '../components/plan/Armar';
import Detalle from '../components/plan/Detalle';

const Plan = () => {


    return (
      <div>
         <Navbar/>
         <Nav />
         <div className="container-fuid">
                <div className="row">
                  <Armar />
                  <Detalle />
                </div>
                </div> 
       
      </div>
    );
  }
  
  export default Plan;