import React from 'react'
import '../style/PagTres.css'/* 
import corona from '../img/solonaranjo.png' */

function PagTres() {
    return (
        <div className="corona fondo">
          
          {/*  <img width="100%" className="virus" alt="coro" src={corona} /> */}
        
            <div className="container">
            <div class="d-flex justify-content-end">
                <div class="row align-items-end">
                <div class="col-md-6 order-1">
                    <div class="p-5">
                    <h5 className="mt-5">!Hola! Soy el Coronavirus.
                        <br/>
                        <br/>
                        Soy un virus muy chiquitito y aunque no me puedas ver, estoy en muchas partes, 
                            y me gusta compartir con muchas personas.</h5>
                    </div>
                    <div className="mt-5">
                    <h5>Ahora me encuentro buscando personas por todo el mundo, para que mi familia y yo , tengamos donde vivir.
                    
                    En tu país, en tu barrio, en tu colegio, incluso en tu parque favorito.</h5>
                    </div>

                </div>
                <div class="col-md-4 order-2 ml-5">
                <h5>Cuando encuentro mi persona favorita, me quedo a vivir en ella para enfermarla y hacerla sentir muy mal.
                    <br/>
                    <br/>
                    Mi problema es que yo no puedo vivir si no estoy dentro de una persona. 
                    Entonces, busco y busco hasta encontar un descuidado que me permita quedarme.
                </h5>
                <div className="mt-5">
                <h5>Así que si no quieres tenerme cerca de ti ni de tu familia, 
                podrías seguir las recomendaciones de To-Mask.</h5>
                </div>
                </div>
                </div>
   {/* <div className="flex-col">
       <div class="d-flex justify-content-end">
            <div class="row align-items-end">
                <div class="col-md-6 order-1">
                    <div class="p-5 ml-5">
                    <h5>Ahora me encuentro buscando personas por todo el mundo, para que mi familia y yo , tengamos donde vivir.
                 En tu país, en tu barrio, en tu colegio, incluso en tu parque favorito.</h5>
                    </div>
                </div>
                <div class="col-md-6 order-2">
                <h5>Así que si no quieres tenerme cerca de ti ni de tu familia, 
                podrías seguir las recomendaciones de To-Mask.</h5>
                </div>
                </div>
                </div>
                </div> */}
            </div>
        </div>
        </div>
       
    )
}

export default PagTres
