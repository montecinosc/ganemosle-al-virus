import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import "../style/quiz.css"
import { useState } from 'react'
import buho from "../img/buho.png"
import QuizDos from './QuizDos'
import mascara from '../img/mascara.png'
import Header from '../components/Header'
const Swal = require('sweetalert2')

function Quiz() {

    let [puntaje, setPuntaje] = React.useState(0);
    const [mostrar, setMostrar] = React.useState(true);

    const prueba = () => {
        if (document.getElementById('p1r2').checked) {

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
            <Header/>
            {mostrar === true ?

                (<div className="contenedorMayor">
                    <img src={mascara} ></img>
                    <div className="contenedorTarjeta">
                        <div >
                            <p>¿Las manos deben ser lavadas con balsamo?</p>
                            <div className="contenedorInput">
                                <input type="radio" id="p1r1" name="animal1" value="1" />Verdadero
                            <input type="radio" id="p1r2" name="animal1" value="1" />Farso
                            </div>
                        </div>
                        <div >
                            <p>No puedo salir ala calle porque hay un virus llamado Covid-19</p>
                            <input type="radio" id="p2r1" name="animal2" value="1" />Falso
                    <input type="radio" id="p2r2" name="animal2" value="1" />Verdadero
                 </div>
                        <div >
                            <p>debo lavar mis manos al menos 6 veces al</p>
                            <input type="radio" id="p2r1" name="animal3" value="1" />Falso
                    <input type="radio" id="p2r2" name="animal3" value="1" />Verdadero
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
