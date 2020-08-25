import React, { Fragment } from 'react'
import footer from '../img/footer.png'
import '../style/PagCuatro.css'
import puma from '../img/pumaEscudo.png'
import corona from '../img/coronaVerde.png'

function PagCuatro() {
    return (
        <Fragment>

            <div className="container">
                <div className="row">
                    <div className="col bloqueCeleste">
                        <div>
                            ¡Hola! Soy <TO-mask className="">Te vengo a contar 4 formas para entender el coronavirus</TO-mask>
                        </div>
                        <p> Lavate las manos</p>
                        <div> Usa agua y jabón, haz espuma. Hazlo durante 20
                        segundos y asegúrate de lavar ambos lados de las
                              manos y entre los dedos.</div>
                        <p> Cubrete bien</p>
                        <div>Al toser y estornudar tapa tu boca con el brazo. </div>
                        <p>Se obediente a las indicaciones de tus padres  </p>
                        <div>No des abrazos, besos, ni te acerques a los demas.
                                   La distancia nos mantiene seguros. </div>
                        <p>Usa una mascarilla</p>
                        <div>Siempre que salgas de casa usa tu mascarilla
                            tapando nariz y boca. ¡Disfrazarnos es genial!  </div>
                        <div> ¡Siempre es divertido arrastrar los gérmenes con agua y jabon! </div>
                    </div>
                    <div className="col">
                        <div className="row-2 bloqueMorado"> <p><img className="icono" src={puma} />  Demuestra di eres un guerrero del Escuadron Prevencion </p></div>
                        <div className="w-100"> </div>
                        <div className="row-2 bloqueMorado"> <img className="icono" src={corona}></img>¿Y tú,puedes protegerte de mi ?
                        Gana este desafio y demuestralo
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PagCuatro
