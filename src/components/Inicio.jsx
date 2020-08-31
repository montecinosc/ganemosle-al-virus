import React from 'react'
import patrulla from '../img/patrulla.png'
import '../style/inicio.css'
import {Link} from 'react-router-dom'
import Footer from './Footer'



function Inicio() {
    return (
        <div className="ini" >
            <div className="container ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row align-items-center">
                            <img className="col-md offset-md patrulla" alt="patru" src={patrulla}/>
                        </div>
                    </div>
                    
                    <div className="col-md-6 letras">
                        <h1 className="col-md offset-md-3">Ganémosle al virus con el escuadron prevención</h1>
                        <br/>
                        <h4 className="col-md offset-md-3">!Aprendamos juntos de autocuidado!</h4>
                        <br/>
                        <Link className="col-md-4 offset-md-6 btn text-white btn-lg" to ="/Home" exact>Entrar</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
         
    )
}

export default Inicio
