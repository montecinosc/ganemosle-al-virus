import React from 'react'
import guantrini from '../img/guante.png'
import '../style/PagSeis.css'

function PagSeis() {
    return (
        <div>
             <div className="container">
        
            <div className="row align-items-center">
               <div class="col-md-6">
                    <h5>¡Hola! Soy Guantrini</h5>
                    <h5>Te invito a conocer todas nuestras aventuras y 
                        así resolver todas las actividades y desafíos.</h5>
                    <h3>¡Únete a el Escuadrón Prevención y juntos combatamos el Coronavirus!</h3>
               </div>
                 <div class="col-md-6">
            
    
                 </div>
           </div>
           </div>
        <div>
             <img className="guante" alt="patru" src={guantrini}/>
        </div>
        </div>
        
    )
}

export default PagSeis
