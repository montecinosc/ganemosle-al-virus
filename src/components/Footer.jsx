import React from 'react'
import footer from '../img/footer.png'
import '../estilos/footer.css'


function Footer() {
    return (
        <div className="divfooter">
             <img className="footer" alt="foo" src={footer}/>
        </div>
    )
}

export default Footer
