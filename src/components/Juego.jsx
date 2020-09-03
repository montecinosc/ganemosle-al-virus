import React from 'react'
import '../style/Juego.css'
import { Fragment } from 'react'
import Header from './Header';
import HeaderCel from '../components/HeaderCel';
import Footer from "./Footer"
import Boton from './Boton'

function Juego() {
  return (
    <Fragment>
      <div className="d-none d-sm-block"><Header /></div>
        <div className="d-lg-none d-sm-block"><HeaderCel /></div>
        <div className="d-none d-sm-block"><Boton/></div>
        <div>
      <iframe src="https://nadia080290.github.io/memorice/" title="Juego"></iframe>
    </div>
    <Footer/>
    </Fragment>
  )
}

export default Juego
