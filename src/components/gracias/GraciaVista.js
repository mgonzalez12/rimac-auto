import React from 'react';
import '../../css/gracias.css';
import Gracias from '../../images/gracias.png';
import GraciaResponsive from '../../images/gracias_responsive.png';

class GraciaVista extends React.Component {

    render() {
        return (
            <div className="col-sm-4">
                <div className="card border-0  colorfondo1">
                    <div className="card-body mt-5 " align="center">
                        <img src={Gracias} className="fondo d-none d-sm-none d-md-block" />
                        <img src={GraciaResponsive} className="fondo d-block d-sm-block d-md-none" />
                    </div>
                </div>
            </div>
        );
    }
}

export default GraciaVista;