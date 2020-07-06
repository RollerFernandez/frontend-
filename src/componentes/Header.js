import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <div className="header-wrap">
                <header>
                    <Link to='/' className="logo">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" className="lazy" data-src="img/logo.svg" alt="logo" />
                        <span className="logo-text">
                            <span>Hey karaoke</span>
                            <span>expresa tu voz</span>
                        </span>
                    </Link>
                    <div className="header-right">

                        <nav className="main-nav" data-menu-gradient>
                            <ul className="menu">
                                <li className="active">
                                    <Link to="/Inicio">INICIO</Link></li>
                                <li>
                                    <Link to="/">CONCIERTOS <svg xmlns="http://www.w3.org/2000/svg" className="show-sub-menu" viewBox="0 0 129 129" enableBackground="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" /></g></svg></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Equipment</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/">ALBUMNES</Link></li>
                                <li><Link to="/">EVENTOS</Link></li>
                                <li><Link to="/">ZONAS</Link></li>
                                <li><Link to="/">BATALLAS</Link></li>
                                <li>
                                    <Link to="/">GALERIA</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">BLOG</Link>
                                            <Link to="/">Blog post</Link>
                                            <Link to="/">Products</Link>
                                            <Link to="/">Products</Link>
                                            <Link to="/">Products</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/login">ACCEDER</Link>
                                </li>
                            </ul>
                            <span className="menu-gradient" />
                        </nav>
                        <div className="hamburger">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
