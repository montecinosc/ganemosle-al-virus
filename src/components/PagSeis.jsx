import React from 'react'
import guantrini from '../img/guante.png'
import '../style/PagSeis.css'
import Footer from "./Footer"
import Header from "./Header"
import HeaderCel from '../components/HeaderCel'

function PagSeis() {
    return (
        <div>
       <div className="d-none d-sm-block"><Header/></div>
       <div className="d-lg-none d-sm-block"><HeaderCel/></div>
            <div className="container mt-5">
        
                <div className="contenedorVideos row">
                    <div className="col-md-6 ml-3">
                            <h5 className="textoGuantrini">¡Hola! Soy <span className="colors"> Guantrini </span></h5>
                            <h5 className="teInvito">Te invito a conocer todas nuestras aventuras y 
                                así resolver todas las actividades y desafíos.</h5>
                            <h3 className="unete mt-3">¡Únete a el Escuadrón Prevención y juntos combatamos el Coronavirus!</h3>

                        <img className="guante" alt="patru" src={guantrini}/>
                        
                    </div>
                        <div class="col-md-2 videoss">
                        <iframe width="270" height="150" src="https://www.youtube.com/embed/G2BHb6kWnRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="videopuma"></iframe>
                        <iframe width="270" height="150" src="https://www.youtube.com/embed/tuILs6Zedco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe>
                        <iframe width="270" height="150" src="https://www.youtube.com/embed/9skA9MFlcs4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="videos"></iframe>
                        <iframe width="270" height="150" src="https://www.youtube.com/embed/kDjrJ5Mu_OY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="coronas"></iframe>
                        </div>
                        </div>
        </div>
       <Footer/>
        </div>
        
    )
}

export default PagSeis
