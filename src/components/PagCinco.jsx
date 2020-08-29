import React from 'react'
import Jabier from '../img/jabier.png'
import PumaOK from '../img/pumaok.png'
import '../style/PagCinco.css'
import Header from "./Header"
import HeaderCel from '../components/HeaderCel'

function PagCinco() {
    return (
        <div>
            <div className="d-none d-sm-block"><Header/></div>
            <div className="d-lg-none d-sm-block"><HeaderCel/></div>
            <div className="rectangulo ml-5">
                <div className="container Jabiers">
                <h5 className="col-md ml-3 mr-5">
                    <br/>
                    !Hola! Soy <span className="colorsh h4">Jabier Jabón </span>
                    <br/>
                    <br/>
                    Echo de menos muchas cosas. Como estar con mis amigos, ir al colegio, hacer deportes 
                    y creo que eso me tiene triste, pero Puma Espuma me dijo que esto no durara para siempre y
                    que si sigo los consejos de To-mask y Guantrini, 
                    pronto le ganaremos al Coronavirus.</h5>     
            </div> 
            </div>
             <img width="200" className="jabier" alt="jabi" src={Jabier}/>

            <div className="cuadrado">
                <div className="container">
                <h5>Así es Jabier Jabon, pronto los niños tendrán la posibilidad de salir algunas horas al día y
                    podrás disfrutar de montar en bici, correr o caminar pero siempre respetando las distancias y 
                    sin olvidar lavar tus manos.</h5>
                <h5>¡Recuerda!</h5>    
                <h3>SE AMBLE , OBEDIENTE Y DISFRUTA A TU FAMILIA EN ESTA CUARENTENA</h3>  
                </div>
                <div>
                <img width="200" className="pumaokis" alt="pumaokilis" src={PumaOK}/> 
                </div>
            </div>
            <h2>Desafíos y entretención descargable</h2>
            
        </div>
    )
}

export default PagCinco
