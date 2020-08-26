import React from 'react'
import patrulla from '../img/patrulla.png'
import '../style/inicio.css'
import {Link} from 'react-router-dom'
import Footer from './Footer'


/* const click = () => {
    console.log("click")} */



function Inicio() {
    return (
        <div className="container">
            <div className="ini">
             <div>
             <img className="patrulla" alt="patru" src={patrulla}/>
             </div>
              <Link className="btn text-white btn-lg" to ="/Home" exact>Entrar</Link>
              <div>
              <h1>Ganémosle al virus con el </h1>
              <h1 className="dos">escuadron prevención</h1>
              <br/>
              <h4>!Aprendamos juntos de autocuidado!</h4>
              </div>
        {/*     <Footer/> */}
         </div>
        </div>
    )
}

export default Inicio
