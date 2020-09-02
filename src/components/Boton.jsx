import React from 'react'
import boton from '../img/botonvolver.png'
import {Link} from "react-router-dom";
import '../style/boton.css'

 function Boton() {
    return (
        <div>
            <Link  to="./home">
            <img className="volver" alt="volverbotonazul" src={boton} /> 
            </Link >
        </div>
    )
}

export default Boton
