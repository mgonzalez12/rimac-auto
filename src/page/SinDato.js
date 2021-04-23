import React, { useState } from 'react';
import DatoDetalle from '../components/DatoDetalle';
import Nav from '../components/Nav';
import Navbar from '../components/Navbar';
import VistaDatos from '../components/VistaDatos';

const SinDato = () => {
    // Declara una nueva variable de estado, que llamaremos "count".
    const [count, setCount] = useState(0);
  
    return (
      <div>
         <Navbar />
         <Nav />
         <div className="container-fuid">
                <div className="row">
                  <VistaDatos/>
                  <DatoDetalle />
                </div>
         </div>
      </div>
    );
  }
  
  export default SinDato;