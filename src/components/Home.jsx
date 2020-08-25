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

const Home = () => {
    const click = () => {
        console.log("yeep¡?")
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <button className="col-md-6 col-sm-12 naranja izquierda flex-column">
                        <img src={corona} className="icono align-items-start" />
                        <p > ¿Qué es el covid-19? </p>
                    </button >
                    <button className="col-md-6 col-sm-12 celeste derecha">
                        <img src={mascara} className="icono align-items-start"></img>
                        <p>¿Cómo cuidarnos?</p>
                    </button >
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col d-none d-sm-block "><img src={circulo}></img> </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <button className="col celeste izquierda">
                        <img src={jabon} className="icono align-items-start"></img>
                        <p> ¿Aprende jugando en casa junto a tu familia?  </p>
                    </button >
                    <button className="col naranja derecha">
                        <img src={guante} className="icono align-items-start"></img>
                        <p>    Sigue las aventuras del escuadrón </p>
                    </button >
                </div>
            </div>

        </Fragment>

    );
}

export default Home;
