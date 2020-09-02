import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import "../style/quiz.css"
import { useState } from 'react'
import buho from "../img/buho.png"
import QuizDos from './QuizDos'
import mascara from '../img/mascara.png'
import Header from '../components/Header'
import HeaderCel from './HeaderCel'
import Boton from './Boton'

const Swal = require('sweetalert2')
function Quiz() {
    let [puntaje, setPuntaje] = React.useState(0);
    const [mostrar, setMostrar] = React.useState(true);
    const prueba = () => {
        if (document.getElementById('p1r1').checked) {
            setPuntaje(puntaje++)
        }
        if (document.getElementById("p2r1").checked) {
            setPuntaje(puntaje++)
        }
        if (document.getElementById("p2r2").checked) {
            setPuntaje(puntaje++)
        }
        if (document.getElementById("p2r2").checked) {
            setPuntaje(puntaje++)
        }
        console.log("puntaje Final", puntaje)
        if (puntaje >= 2) {
            console.log("que buen puntaje ,pasas al sig nivel")
            Swal.fire({
                title: 'Muy bien',
                text: 'Pasaste a la segunda etapa',
                icon: 'success',
                confirmButtonText: 'Vamos por más!',
            })
            setMostrar(false)
        } else {
            console.log("intentalo nuevamente")
            Swal.fire({
                title: 'Intentalo nuevamente',
                text: 'Existen mas etapas a desbloquear',
                icon: 'warning',
                confirmButtonText: 'Lo intentare',
            })
        }
    }
    return (
        <Fragment>
            <div className="d-none d-sm-block"><Header /></div>
            <div className="d-lg-none d-sm-block"><HeaderCel /></div>
            <Boton/>
            {mostrar === true ?
                (<div className="contenedorMayor">
                    <img src={mascara} className="mascaraQuiz"></img>
                    <div className="contenedorTarjeta">
                        <div className="containerTextoQuizTodo"></div>
                        <div className="contenedorTextoQuiz">
                            <p className="textoQuiz">Las manos deben lavar con agua y jabón</p>
                            <div className="contenedorInput">
                                <input type="radio" id="p1r1" name="quiz1" value="1"/>Verdadero
                            <input type="radio" id="p1r2" name="quiz1" value="1" />Falso
                            </div>
                        </div>
                        <div >
                            <p className="textoQuiz">El CoronaVirus es un chiquitito</p>
                            <input className="contenedorInput" type="radio" id="p2r1" name="quiz2" value="1" />Verdadero
                    <input type="radio" id="p2r2" name="quiz2" value="1" />Falso
                 </div>
                        <div >
                            <p className="textoQuiz">Podemos salir a la calle sin mascarilla</p>
                            <input className="contenedorInput" type="radio" id="p2r1" name="quiz3" value="1" />Verdadero
                    <input type="radio" id="p2r2" name="quiz3" value="1" />Falso
                 </div>
                        <div>
                            <p className="textoQuiz">El virus no se contagia al abrazar a una persona </p>
                            <input className="contenedorInput" type="radio" id="p2r1" name="quiz4" value="1" />Verdadero
                    <input type="radio" id="p2r2" name="quiz4" value="1" />Falso
                 </div>
                    </div>
                    <button onClick={prueba} className="botonEnviar" >Iniciar</button>
                </div>) : (
                    <QuizDos />
                )
            }
            <Footer />
        </Fragment >
    )
}
export default Quiz
