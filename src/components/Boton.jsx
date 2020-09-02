import React from 'react'
import boton from '../img/botonvolver.png'
import {Link} from "react-router-dom";

 function Boton() {
    return (
        <div>
            <Link  to="./home">
            <img className="volver" src={boton}/>
            </Link >
        </div>
    )
}

export default Boton
