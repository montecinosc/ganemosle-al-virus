import React, { Fragment } from 'react'

import "../style/quiz.css"
import mascara from "../img/puma.png"
import jabon from "../img/jabon.png"
const Swal = require('sweetalert2');
//import QuizTres from "./QuizTres"

function QuizDos() {

    let [puntaje, setPuntaje] = React.useState(0);
    const [mostrar, setMostrar] = React.useState(true);

    let [puntajeDos, setPuntajeDos] = React.useState(0);

    const [segunda, setSegunda] = React.useState();
    const prueba2 = () => {
        if (document.getElementById("p2r2").checked) {
            setPuntaje(puntaje++)
        }
        if (document.getElementById("p2r2").checked) {
            setPuntaje(puntaje++)
        }
        if (document.getElementById("p2r1").checked) {
            setPuntaje(puntaje++)
        }
        Swal.fire({
            title: 'Muy Bien!',
            text: 'Lograste terminar el quiz Hottie',
            imageUrl: 'https://t1.ea.ltmcdn.com/es/images/7/0/0/buhos_24007_1_600.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        console.log("puntaje 2", puntaje)
        setMostrar(false)

    }

    return (
        <Fragment>
            {mostrar === true ? (
                <div className="contenedorMayor">
                    <img src={mascara} ></img>
                    <div className="contenedorTarjeta">
                        <div >
                            <p>Al toser o estornudar , debo tapar mi boca con las manos</p>
                            <div>
                                <input type="radio" id="p2r1" name="quiz1" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz1" value="1" />Falso
                 </div>
                        </div>
                        <div >
                            <p>Debo lavar mis manos durante 5 segundo</p>
                            <div>
                                <input type="radio" id="p2r1" name="quiz2" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz2" value="1" />Falso </div>
                        </div>
                        <div >
                            <p>debo mantener distancia de otras personas</p>
                            <div>
                                <input type="radio" id="p2r1" name="quiz3" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz3" value="1" />Falso </div>
                        </div>

                        <button onClick={prueba2} className="botonEnviar"  >Enviar</button>
                    </div>
                </div>
            ) : (<div className="contenedorMayor">
                <img src={jabon} ></img>
                <div className="contenedorTarjeta">
                    <p>El virus vive dentro de una persona</p>
                    <div>
                        <input type="radio" id="p2r1" name="quiz1" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz1" value="1" />Falso </div>
                </div>
                <div className="contenedorTarjeta">
                    <p>El virus esta en todo el mundo</p>
                    <div>
                        <input type="radio" id="p2r1" name="quiz2" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz2" value="1" />Falso </div>
                </div>
                <div className="contenedorTarjeta">
                    <p>El virus no esta en mi colegio</p>
                    <div>
                        <input type="radio" id="p2r1" name="quiz3" value="1" />Verdadero
                <input type="radio" id="p2r2" name="quiz3" value="1" />Falso </div>
                </div>

                <button onClick={prueba2} className="botonEnviar"  >Enviar</button>
            </div>)
            }
        </Fragment >
    )
}

export default QuizDos