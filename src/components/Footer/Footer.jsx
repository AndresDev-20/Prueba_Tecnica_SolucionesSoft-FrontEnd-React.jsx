import React from "react";
import './Footer.css'

const Footer = () => {

    return(
        <footer className="Footer">
            <div className="Footer__chill1">
                <figure className="Footer__movil">
                    <img src="../../../images/Layer_1.png" alt="Coca" />
                    <img src="../../../images/Layer_2.png" alt="Banck" />
                    <img src="../../../images/Layer_3.png" alt="Our" />
                    <img src="../../../images/Layer_4.png" alt="Vi" />
                </figure>
                <figure className="Footer__pc">
                    <img src="../../../images/Logo.png" alt="logo" />
                    <img src="../../../images/Logo.png" alt="logo" />
                    <img src="../../../images/Logo.png" alt="logo" />
                    <img src="../../../images/Logo.png" alt="logo" />
                    <img src="../../../images/Logo.png" alt="logo" />
                    <img src="../../../images/Logo.png" alt="logo" />
                    <img src="../../../images/Logo.png" alt="logo" />
                    <img src="../../../images/Logo.png" alt="logo" />
                    <img src="../../../images/Logo.png" alt="logo" />
                </figure>
            </div>
            <div className="Footer__chill2">
                <h1 className="Footer__chill2-title">Powered by SolucionSoft.com</h1>
                <ul className="Footer__chill2-ul">
                    <li><i className='bx bxl-facebook-circle'></i></li>
                    <li><i className='bx bxl-twitter'></i></li>
                    <li><i className='bx bxl-instagram' ></i></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;