import React from 'react'
import "../style/PagTresRes.css"
import PagTress from '../img/tresres.png'
import Boton from './Boton'

function PagTresRes() {
    return (
        <div className="pagTres">
            <img className="pagTres" alt="pagTres" src={PagTress}/>
          <Boton/> 
        </div>
    )
} export default PagTresRes