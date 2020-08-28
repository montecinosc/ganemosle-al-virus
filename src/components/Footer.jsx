import React from 'react'
import "../style/Footer.css"
import footer from '../img/footer.png'
function Footer() {
    return (
        <div className="footer mt-5">
            <img className="footer" alt="foot" src={footer}/>
            {/*<div class="row">*/}
                {/*<div class="col-md-6 morado col-6"></div>*/}
                {/*<div class="col-md-6 celesteF col-6"></div>*/}
            {/*</div>*/}
        </div>
    )
} export default Footer