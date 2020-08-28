import React from 'react'
import guantrini from '../img/guante.png'
import '../style/PagSeis.css'
import Footer from "./Footer"
import Header from "./Header"

function PagSeis() {
    return (
        <div>
            <Header/>
            <div className="container mt-5">
        
                <div className="row">
                    <div class="col-md-6">
                            <h5>¡Hola! Soy <span className="colors"> Guantrini </span></h5>
                            <h5>Te invito a conocer todas nuestras aventuras y 
                                así resolver todas las actividades y desafíos.</h5>
                            <h3 className="mt-3">¡Únete a el Escuadrón Prevención y juntos combatamos el Coronavirus!</h3>
                     
                        <img  width="300" className="ml-5 mt-3 guante" alt="patru" src={guantrini}/>
                        
                    </div>
                        <div class="col-md-2 videoss">
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/G2BHb6kWnRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="videopuma"></iframe>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/tuILs6Zedco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/9skA9MFlcs4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="videos"></iframe>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/kDjrJ5Mu_OY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="coronas"></iframe>
                        </div>
                        </div>
        </div>
       <Footer/>
        </div>
        
    )
}

export default PagSeis
