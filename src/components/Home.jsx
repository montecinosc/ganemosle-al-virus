import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import "../style/Home.css"
import circulo from "../img/circulopuma.png"
import puma from "../img/puma.png"
import corona from "../img/coronaRojo.png"
import mascara from "../img/mascara.png"
import jabon from "../img/jabon.png"
import guante from "../img/guante.png"
import circuloSin from "../img/circuloSinTexto.png"
import Footer from "./Footer"

const Home = () => {
    const click = () => {
        console.log("yeep¡?")
    }
    return (
        <Fragment>

            <div className="container ">
                <div className="row bloque col  d-md-none .d-lg-block d-flex justify-content-center">
                    <img src={puma} className="imgBloque "></img>

                    <div className="colorUno">
                        <p className="colorUno">¡Hola! soy <span className="colorDos">_Puma Espuma </span>  </p>
                    Te quiero invitar a descubrir
                    qué es el coronavirus y cómo combatirlo junto
                       a mi escuadrón, Guantrini, To-Mask y Jabier Jabón  </div>
                </div>
                <div className="row ">
                    <button className="naranja  col-xs-12 col-md-5  d-flex flex-column align-items-center">
                        <img src={corona} className=" iconos" />
                        <p className=""> ¿Qué es el covid-19? </p>

                    </button >
                    <div className="col d-none d-sm-block  col  col-md-2 ">

                    </div>
                    <button className="celeste col-xs-12 col-md-5 d-flex flex-column align-items-center">
                        <img src={mascara} className=" iconosMascara"></img>
                        <p>¿Cómo cuidarnos?</p>
                    </button >
                </div>
                <div className="row ">
                    <div className="col d-none d-sm-block ">
                        <img src={circuloSin} className="circulo"></img>
                        <div className="texto colorUno">
                            <p className="colorUno">¡Hola! soy <span className="colorDos">_Puma Espuma </span>  </p>
                            Te quiero invitar a descubrir qué es el
                            coronavirus y cómo combatirlo junto
                            a mi escuadrón, Guantrini, <span className="colorTres"> To-Mask </span>
                            y  <span className="colorCuatro">Jabier Jabón</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="celeste col-xs-12 col-md-5 d-flex flex-column align-items-center">
                        <img src={jabon} className="iconos"></img>
                        <p> ¿Aprende jugando en casa junto a tu familia?  </p>
                    </button >
                    <div className="col d-none d-sm-block  col  col-md-2 ">

                    </div>
                    <button className="naranja  col-xs-12 col-md-5  d-flex flex-column align-items-center">
                        <img src={guante} className="iconos"></img>
                        <p>    Sigue las aventuras del escuadrón </p>
                    </button >
                </div>

            </div>
            <Footer />
        </Fragment>

    );
}

export default Home;
