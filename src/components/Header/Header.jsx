import React from "react"
import './Header.css'

const Header = () => {

    return (
        <header className="Header"> 
            <div className="Header__div">
                <figure className="Header__figure">
                    <img src="../../../images/Logo.png" alt="logo" />
                </figure>
            </div>
            <nav className="Header__nav">
                <h1 className="Header__name"><span>Francisco</span> <span>Bienvenido</span></h1>
                <figure className="Header__nav-figure">
                    <img src="../../../images/Avatar.png" alt="avatar" />
                </figure>
                <button className="Header__btn"><i className='bx bx-menu-alt-left'></i></button>
            </nav>
        </header>
    )
}

export default Header