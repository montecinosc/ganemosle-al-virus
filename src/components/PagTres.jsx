import React from 'react'
import '../style/PagTres.css'
import corona from '../img/fondoyletra8.png'
import Footer from "./Footer"
import Header from "./Header"
import HeaderCel from '../components/HeaderCel'
import PagTresRes from '../components/PagTresRes'
import Boton from './Boton'
import cuentoUno from '../audio/cuentoUno.mp3'
import cuentoDos from '../audio/cuentoDos.mp3'

function PagTres() {
  return (
    <div>
      <div className="corona fondo ">
        <div className="d-none d-sm-block"><Header /></div>
        <div className="d-lg-none d-sm-block"><HeaderCel /></div>
        {/* <audio src={cuentoUno} controls className="audioUno audioResUno"></audio>
        <audio src={cuentoDos} controls className="audioDos"></audio>*/}
        <div className="d-none d-sm-block"><Boton /></div>
        <div className="colorFondo d-lg-none d-sm-block"><PagTresRes /></div>
        <img className="virus d-none d-sm-block" alt="coro" src={corona} />
        <Footer />
      </div>
    </div >

  )
}

export default PagTres