import React, { Fragment } from 'react'
import Jabier from '../img/jabier.png'
import PumaOK from '../img/pumaok.png'
import '../style/PagCinco.css'
import Header from "./Header"
import HeaderCel from '../components/HeaderCel'
import pdf from '../pdf/calendario.png'
import dominoDino from '../pdf/dominoDinosaurios.pdf'
import dominoHottie from '../pdf/dominoHottie.pdf'
import Footer from '../components/Footer'

function PagCinco() {

    return (
        <Fragment>

            <div className="d-none d-sm-block"><Header /></div>
            <div className="d-lg-none d-sm-block"><HeaderCel /></div>
            <div className="contenedorDescarga">
                <div className="contenedorTexto">
                    <div className="colorDescarga" >
                        !Hola! Soy <span className="textoNaranjo">Jabier Jabón  </span>  <br />
                         Echo de menos muchas cosas. Como estar con mis amigos, ir al colegio, hacer deportes
                        y creo que eso me tiene triste, pero Puma Espuma me dijo que esto no durara para siempre y
                        que si sigo los consejos de To-mask y Guantrini,
                        pronto le ganaremos al Coronavirus.  </div>
                    <img className="imagenDescarga" src={Jabier} />
                </div>
                <br />
                <div className="contenedorTexto contenedorTextoDos">
                    <img className="imagenDescarga" src={PumaOK} />
                    <div className="colorDescargaDos" >
                        Así es Jabier Jabon, pronto los niños tendrán la posibilidad de salir algunas horas al día y
                        podrás disfrutar de montar en bici, correr o caminar pero siempre respetando las distancias y
                        sin olvidar lavar tus manos.<br />
                        <div className="textoTres"> ¡Recuerda!</div>
                        SE AMBLE , OBEDIENTE Y DISFRUTA A TU FAMILIA EN ESTA CUARENTENA
                    </div>
                </div>
                <p className="textoCuatro">Desafíos y entretención descargable</p>
                <div className="contenedorTres">
                    <div className="cajaDescargaMorado"><a href={dominoHottie} download="Domino HottieHoo" className="colorBoton"> Domino</a></div>
                    <div className="cajaDescargaNaranjo"><a href={dominoDino} download="Domino Dinosaurio" className="colorBoton"> Domino</a></div>
                    <div className="cajaDescargaMorado" ><a href={pdf} download="Calendario" className="colorBoton"> Calendario</a></div>

                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default PagCinco
