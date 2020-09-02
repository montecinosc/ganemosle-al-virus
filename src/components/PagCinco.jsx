import React, { Fragment } from 'react'
import Jabier from '../img/jabier.png'
import PumaOK from '../img/pumaok.png'
import '../style/PagCinco.css'
import Header from "./Header"
import HeaderCel from '../components/HeaderCel'
import calendario from '../pdf/calendario-sticker.pdf'
import colorear from '../pdf/colorear.pdf'
import dominoHottie from '../pdf/dominoHottie.pdf'
import Footer from '../components/Footer'
import javierAudio from '../audio/jabon.mp3'
import pumaAudio from '../audio/Pumaespuma.mp3'
import Boton from './Boton'

function PagCinco() {
    return (
        <Fragment>
            <div className="d-none d-sm-block"><Header /></div>
            <div className="d-lg-none d-sm-block"><HeaderCel /></div>
            <Boton/>
            <div className="contenedorDescarga">
                <div className="contenedorTexto">
                    <div className="colorDescarga" >
                        <p className="jabonTexto"><span className="encabezadoDos">!Hola! Soy Jabier Jabón  </span>  <br />
                            <p className="echoDe">Echo de menos muchas cosas. Como estar con mis amigos, ir al colegio, hacer deportes
                            y creo que eso me tiene triste, pero Puma Espuma me dijo que esto no durara para siempre y
                            que si sigo los consejos de To-mask y Guantrini,
                        pronto le ganaremos al Coronavirus. </p></p> </div>
                    <img className="imagenDescarga" src={Jabier} />

                </div>
                <audio src={javierAudio} controls></audio>
                <br />
                <div className="contenedorTextoDos">

                    <div className="textoRosado">
                        <img className="imagenPumaEspuma" src={PumaOK} />

                    </div>

                    <div className="colorDescargaDos" >
                        <p className="asiEs">Así es Jabier Jabon, pronto los niños tendrán la posibilidad de salir algunas horas al día y
                        podrás disfrutar de montar en bici, correr o caminar pero siempre respetando las distancias y
                        sin olvidar lavar tus manos.<br />
                            <div className="textoTres"> ¡Recuerda!</div>
                            <p className="seAmable">SE AMBLE , OBEDIENTE Y DISFRUTA A TU FAMILIA EN ESTA CUARENTENA</p> </p>

                    </div>
                </div>
                <audio src={pumaAudio} controls></audio>
                <p className="textoCuatro">Desafíos y entretención descargable</p>
                <div className="contenedorTres">
                    <div className="cajaDescargaMoradoUno"><a href={dominoHottie} download="Domino HottieHoo" className="colorBoton"> Dominó </a></div>
                    <div className="cajaDescargaNaranjo"><a href={colorear} download="Colorear" className="colorBoton"> Colorear</a></div>
                    <div className="cajaDescargaMorado" ><a href={calendario} download="Calendario-Stickers" className="colorBoton"> Calendario</a></div>                </div>
            </div>
            <Footer />
        </Fragment>
    )
} export default PagCinco