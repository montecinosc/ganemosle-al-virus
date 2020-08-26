import React from 'react'
import footer from '../img/footer.png'
import '../style/footer.css'


function Footer() {
    return (
        <div className="fixed-bottom divfooter">
             <img className="footer" alt="foo" src={footer}/>
        </div>
    )
}

export default Footer
