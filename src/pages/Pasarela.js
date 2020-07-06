import React, { Component } from 'react'
import '../css/estilos.css'
import '../css/custom.css'
import chip from '../img/chip-tarjeta.png'
// import '../utils/main'

export default class Pasarela extends Component {
    render() {
        return (
            <div>


                <div className="contenedor">

                    {/* Tarjeta */}
                    <section className="tarjeta" id="tarjeta">
                        <div className="delantera">
                            <div className="logo-marca" id="logo-marca">
                                {/* <img src="img/logos/visa.png" alt=""> */}
                            </div>
                            <img src={chip} className="chip" />
                            <div className="datos">
                                <div className="grupo" id="numero">
                                    <p className="label">Número Tarjeta</p>
                                    <p className="numero">#### #### #### ####</p>
                                </div>
                                <div className="flexbox">
                                    <div className="grupo" id="nombre">
                                        <p className="label">Nombre Tarjeta</p>
                                        <p className="nombre">Jhon Doe</p>
                                    </div>
                                    <div className="grupo" id="expiracion">
                                        <p className="label">Expiracion</p>
                                        <p className="expiracion"><span className="mes">MM</span> / <span className="year">AA</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trasera">
                            <div className="barra-magnetica" />
                            <div className="datos">
                                <div className="grupo" id="firma">
                                    <p className="label">Firma</p>
                                    <div className="firma"><p /></div>
                                </div>
                                <div className="grupo" id="ccv">
                                    <p className="label">CCV</p>
                                    <p className="ccv" />
                                </div>
                            </div>
                            <p className="leyenda">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem, voluptates illo.</p>
                            <a href="#" className="link-banco">www.tubanco.com</a>
                        </div>
                    </section>
                    {/* Contenedor Boton Abrir Formulario */}
                    <div className="contenedor-btn">
                        <button className="btn-abrir-formulario" id="btn-abrir-formulario">
                            <i className="fas fa-plus" />
                        </button>
                    </div>
                    {/* Formulario */}
                    <form  id="formulario-tarjeta" className="formulario-tarjeta">
                        <div className="grupo">
                            <label htmlFor="inputNumero">Número Tarjeta</label>
                            <input type="text" id="inputNumero" maxLength={19} autoComplete="off" />
                        </div>
                        <div className="grupo">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input type="text" id="inputNombre" maxLength={19} autoComplete="off" />
                        </div>
                        <div className="flexbox">
                            <div className="grupo expira">
                                <label htmlFor="selectMes">Expiracion</label>
                                <div className="flexbox">
                                    <div className="grupo-select">
                                        <select name="mes" id="selectMes">
                                            <option disabled defaultValue>Mes</option>
                                        </select>
                                        <i className="fas fa-angle-down" />
                                    </div>
                                    <div className="grupo-select">
                                        <select name="year" id="selectYear">
                                            <option disabled defaultValue>Año</option>
                                        </select>
                                        <i className="fas fa-angle-down" />
                                    </div>
                                </div>
                            </div>
                            <div className="grupo ccv">
                                <label htmlFor="inputCCV">CCV</label>
                                <input type="text" id="inputCCV" maxLength={3} />
                            </div>
                        </div>
                        <button type="submit" className="btn-enviar">Enviar</button>
                    </form>

                </div></div>
        )
    }
}
