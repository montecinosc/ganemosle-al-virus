import React from 'react'
import "../style/header.css"
import header from '../img/Header.png'
import Boton from './Boton'
import Cel from '../img/headercel.png'
import "../style/headerCel.css"


function HeaderCel() {
    return (
        <div className="headCel">
             <img className="headerCel" alt="headCel" src={Cel}/>
        </div>
    )
}

export default HeaderCel
