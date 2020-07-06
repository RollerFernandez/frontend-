import React, { useState,Component } from 'react'
import {Redirect} from 'react-router-dom'

import './css/custom.css'
import './css/index2.css'

export default function Login() {
    // render() {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        function handleSubmit(event) {
            event.preventDefault();
            // <Redirect to="/" />
        }

        function validateForm() {
            return email.length > 0 && password.length > 0;
        }

        function validar(){

        }

        return (
            <form onSubmit={handleSubmit}>
                
            <div className='background'>
                <div className="main-slider-wrap">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card card-signin my-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Logo</h5>
                                        <label className="d-flex justify-content-center links mb-3">Para continuar, inicia sesión en Hey Karaoke.</label>
                                        <div className="form-signin">
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail" value={email}
                                                onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email address" required  />
                                                <label htmlFor="inputEmail">Usuario</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" value={password}
                                                onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" required />
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Recuerdamé</label>
                                            </div>
                                            <button className="btn button btn-lg btn-primary btn-block text-uppercase" id="btnIniciar" disabled={!validateForm()} type="submit">INICIAR SESIÓN</button>
                                            <a href="#" className="d-flex justify-content-center links mt-2">¿Se te ha olvidado la contraseña?</a>
                                            <hr className="my-4" />
                                            <button className="btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> INICIAR CON Google</button>
                                            <button className="btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> INICIAR CON Facebook</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            </form>
        )

    // }
}
