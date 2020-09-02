import React from 'react'
import "../style/header.css"
import header from '../img/Header.png'
import Boton from './Boton'
import Cel from '../img/headercel.png'
import "../style/headerCel.css"
import {Link} from "react-router-dom";


function HeaderCel() {
    return (
        <div className="headCel">
            <Link  to="./home">
            <img className="headerCel" alt="headCel" src={Cel} /> 
            </Link >
        </div>
    )
}

export default HeaderCel
