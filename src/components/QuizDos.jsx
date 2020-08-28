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
        if (document.getElementById("p2r2").checked) {
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
                            <p>debo lavar mis manos al menos 2 veces al</p>
                            <div>
                                <input type="radio" id="p2r1" name="animal5" value="1" />Verdadero
                <input type="radio" id="p2r2" name="animal5" value="1" />Falso </div>
                        </div>
                        <div >
                            <p>debo lavar mis manos al menos 2 veces al</p>
                            <div>
                                <input type="radio" id="p2r1" name="animal6" value="1" />Verdadero
                <input type="radio" id="p2r2" name="animal6" value="1" />Falso </div>
                        </div>
                        <div >
                            <p>debo lavar mis manos al menos 2 veces al</p>
                            <div>
                                <input type="radio" id="p2r1" name="animal7" value="1" />Verdadero
                <input type="radio" id="p2r2" name="animal7" value="1" />Falso </div>
                        </div>

                        <button onClick={prueba2} className="botonEnviar"  >Enviar</button>
                    </div>
                </div>
            ) : (<div className="contenedorMayor">
                <img src={jabon} ></img>
                <div className="contenedorTarjeta">
                    <p>debo lavar mis manos al menos 2 veces al</p>
                    <div>
                        <input type="radio" id="p2r1" name="animal5" value="1" />Verdadero
                <input type="radio" id="p2r2" name="animal5" value="1" />Falso </div>
                </div>
                <div className="contenedorTarjeta">
                    <p>debo lavar mis manos al menos 2 veces al</p>
                    <div>
                        <input type="radio" id="p2r1" name="animal6" value="1" />Verdadero
                <input type="radio" id="p2r2" name="animal6" value="1" />Falso </div>
                </div>
                <div className="contenedorTarjeta">
                    <p>debo lavar mis manos al menos 2 veces al</p>
                    <div>
                        <input type="radio" id="p2r1" name="animal7" value="1" />Verdadero
                <input type="radio" id="p2r2" name="animal7" value="1" />Falso </div>
                </div>

                <button onClick={prueba2} className="botonEnviar"  >Enviar</button>
            </div>)
            }
        </Fragment >
    )
}

export default QuizDos