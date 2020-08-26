import React from 'react'
import iniciogav from '../img/iniciogav.png'
import patrulla from '../img/patrulla.png'
/* import '../estilos/inicio.css' */
import {Link} from 'react-router-dom'
import Footer from './component/Footer'


/* const click = () => {
    console.log("click")} */



function Inicio() {
    return (
        <div className="ini">
            {/*  <div  className="pantalla">
             <img className="inicio" alt="gav" src={iniciogav}/> 
             </div> */}
             <div className="d-flex align-items-center">
             <img className="patrulla" alt="patru" src={patrulla}/>
             </div>
             {/* <button type="button" className="text-white btn btn-dark m-1" onClick={click}>
                Entrar
              </button> */}
              <Link className="btn-dark text white" to ="/Home" exact>Entrar</Link>
              <div /* className="float-right text */>
              <h2>Ganemosle al virus con el escuadron prevención</h2>
              <h5>!Aprendamos juntos de autocuidado!</h5>
              </div>
            <Footer/>
        </div>
    )
}

export default Inicio
