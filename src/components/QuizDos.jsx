import React, { Fragment } from 'react'
import "../style/quizDos.css"
import pumaEscudo from "../img/pumaEscudo.png"
import jabon from "../img/jabon.png"
const Swal = require('sweetalert2');
//import QuizTres from "./QuizTres"
function QuizDos() {
    let [puntaje, setPuntaje] = React.useState(0);
    const [mostrar, setMostrar] = React.useState(true);
    let [puntajeDos, setPuntajeDos] = React.useState(0);
    const [segunda, setSegunda] = React.useState();
    const quiz2 = () => {
        if (document.getElementById("p2r2").checked) {
            setPuntaje(puntaje++)
        }
        if (document.getElementById("p2r2").checked) {
            setPuntaje(puntaje++)
        }
        if (document.getElementById("p2r1").checked) {
            setPuntaje(puntaje++)
        }
        if (puntaje >= 2) {
            Swal.fire({
                title: 'Lo lograste!',
                text: 'Pasaste a la 3ra etapa del quiz Hottie',
                imageUrl: 'https://t1.ea.ltmcdn.com/es/images/7/0/0/buhos_24007_1_600.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            console.log("puntaje 2", puntaje)
            setMostrar(false)
        } else {
            console.log("fuiste")
            Swal.fire({
                title: 'Intentalo nuevamente',
                text: 'Aun queda la tercera etapa y final',
                icon: 'warning',
                confirmButtonText: 'Lo intentare',
            })
        }
    }
    const quiz3 = () => {
        if (document.getElementById("p4r1").checked) {
            setPuntajeDos(puntajeDos++)
        }
        if (document.getElementById("p5r1").checked) {
            setPuntajeDos(puntajeDos++)
        }
        if (document.getElementById("p6r2").checked) {
            setPuntajeDos(puntajeDos++)
        }
        if (puntajeDos >= 2) {
            Swal.fire({
                title: 'Muy Bien!',
                text: 'Lograste terminar el quiz Hottie',
                imageUrl: 'https://t1.ea.ltmcdn.com/es/images/7/0/0/buhos_24007_1_600.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            console.log("puntaje 2", setPuntajeDos)
        } else {
            Swal.fire({
                title: 'Intentalo nuevamente',
                text: 'Aun queda la tercera etapa y final',
                icon: 'warning',
                confirmButtonText: 'Lo intentare',
            })
        }

    }
    return (
        <Fragment>
            {mostrar === true ? (
                <div className="contenedorMayor">
                    <img src={pumaEscudo} className="imagenQuiz" />
                    <div className="contenedorTarjeta">
                        <div >
                            <p className="textoQuiz" >Al toser o estornudar , debo tapar mi boca con las manos</p>
                            <div>
                                <input type="radio" id="p2r1" name="quiz1" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz1" value="1" />Falso
                 </div>
                        </div>
                        <div >
                            <p className="textoQuiz">Debo lavar mis manos durante 5 segundos</p>
                            <div>
                                <input type="radio" id="p2r1" name="quiz2" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz2" value="1" />Falso </div>
                        </div>
                        <div >
                            <p className="textoQuiz">debo mantener distancia de otras personas</p>
                            <div>
                                <input type="radio" id="p2r1" name="quiz3" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz3" value="1" />Falso </div>
                        </div>
                    </div>
                    <button onClick={quiz2} className="botonEnviar"  >Enviar</button>
                </div>
            ) : (<div className="contenedorMayor">
                <img src={jabon} className="imagenQuiz" />
                <div className="contenedorTarjeta">
                    <div>  <p className="textoQuiz">El virus vive dentro de una persona</p>
                        <div>
                            <input type="radio" id="p4r1" name="quiz1" value="1" />Verdadero
                <input type="radio" id="p4r2" name="quiz1" value="1" />Falso </div> </div>
                    <div >
                        <p className="textoQuiz">El virus esta en todo el mundo</p>
                        <div>
                            <input type="radio" id="p5r1" name="quiz2" value="1" />Verdadero
                <input type="radio" id="p5r2" name="quiz2" value="1" />Falso </div>
                    </div>
                    <div >
                        <p className="textoQuiz">El virus no esta en mi colegio</p>
                        <div>
                            <input type="radio" id="p6r1" name="quiz3" value="1" />Verdadero
                <input type="radio" id="p6r2" name="quiz3" value="1" />Falso
                 </div>
                    </div>
                </div>

                <button onClick={quiz3} className="botonEnviar"  >Enviar</button>
            </div>
                )
            }
        </Fragment >
    )
}
export default QuizDos