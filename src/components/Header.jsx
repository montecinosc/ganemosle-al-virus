import React from 'react'
import "../style/header.css"
import header from '../img/Header.png'
import Boton from './Boton'

function Header() {
    return (
        <div className="head">
             <img className="header" alt="head" src={header}/>
        </div>
    )
}

export default Header
