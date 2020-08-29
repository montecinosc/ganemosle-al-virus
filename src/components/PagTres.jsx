import React from 'react'
import '../style/PagTres.css'
import corona from '../img/fondoyletra8.png'
import Footer from "./Footer"
import Header from "./Header" 
import HeaderCel from '../components/HeaderCel'

function PagTres() {
    return (
      <div> 
          <div className="corona fondo">
          <div className="d-none d-sm-block"><Header/></div>
          <div className="d-lg-none d-sm-block"><HeaderCel/></div>
          <img className="virus" alt="coro" src={corona} />  
          <Footer/>
          </div>
        </div>
    )
}

export default PagTres
