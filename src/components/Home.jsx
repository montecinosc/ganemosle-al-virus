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
import Boton from "../components/Boton"
import Footer from "./Footer"
import Header from './Header';

const Home = () => {
    const click = () => {
        console.log("yeep¡?")
    }
    return (
        <Fragment>
          <div className="d-none d-sm-block"><Header/></div>
            <div className="container ">
                <div className="row bloque col  d-md-none .d-lg-block d-flex justify-content-center">
                    <img src={puma} className="imgBloque"/>

                    <div className="colorUno">
                        <p className="colorUno">¡Hola! soy <span className="colorDos"> &nbsp;Puma Espuma </span>  </p>
                    Te quiero invitar a descubrir
                    qué es el coronavirus y cómo combatirlo junto
                       a mi escuadrón, <span className="guantrini">Guantrini</span>, <span className="colorTres">To-Mask </span> y <span className="colorCuatro">Jabier Jabón</span></div>
                </div>
                <div className="row ">
                    <button className="naranja  col-xs-12 col-md-5  d-flex flex-column align-items-center">
                        <img src={corona} className=" iconoCorona" />
                        <p className="covid"> ¿Qué es el covid-19? </p>

                    </button >
                    <div className="col d-none d-sm-block  col  col-md-2 ">

                    </div>
                    <button className="celeste col-xs-12 col-md-5 d-flex flex-column align-items-center">
                        <img src={mascara} className=" iconoMascara"></img>
                        <p className="cuidarnos">¿Cómo cuidarnos?</p>
                    </button >
                </div>
          
                <div className="row ">  
                    <div className="col d-none d-sm-block "> 
                        <img src={circuloSin} className="circulo"></img>
                        <div className="texto colorUno">
                            <p className="colorUno">¡Hola! soy <span className="colorDos"> &nbsp;Puma Espuma </span>  </p>
                            Te quiero invitar a descubrir qué es el
                            coronavirus y cómo combatirlo junto
                            a mi escuadrón, <span className="guantrini">Guantrini</span>, <span className="colorTres"> To-Mask </span>
                            y  <span className="colorCuatro">Jabier Jabón</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="celeste col-xs-12 col-md-5 d-flex flex-column align-items-center">
                        <img src={jabon} className="iconoJabon"></img>
                        <p className="aprende"> ¿Aprende jugando en casa junto a tu familia?  </p>
                    </button >
                    <div className="col d-none d-sm-block  col  col-md-2 ">

                    </div>
                    <button className="naranja  col-xs-12 col-md-5  d-flex flex-column align-items-center">
                        <img src={guante} className="iconoGuante"></img>
                        <p className="sigue">    Sigue las aventuras del escuadrón </p>
                    </button >
                </div>

            </div>
            <Footer />
        </Fragment>

    );
}

export default Home;
