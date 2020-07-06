import React, { Component } from 'react'
import '../css/custom.css'
// import '../css/index2.css'

export default class Registrar extends Component {
    render() {
        return (
            <div className='background-r'>
                <div className="main-slider-wrap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-9 mx-auto">
                                <div className="card card-signin my-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Logo</h5>
                                        <label className="d-flex justify-content-center links mb-3 font-weight-bold">Registrate gratis para disfrutar.</label>
                                        <form className="form-signin">
                                            <button className="d-flex justify-content-center btn-lg btn-facebook btn-block text-uppercase mb-2 " type="submit"><i className="fab fa-facebook-f mr-2" /> REGISTRARTE CON Facebook</button>
                                            <hr className="my-4" />
                                            <label className="d-flex justify-content-center links mb-3 font-weight-bold">Registrarte con tu correo electrónico.</label>
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                                <label htmlFor="inputEmail">¿Cuál es tu correo electrónico?</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail2" className="form-control" placeholder="Email address" required />
                                                <label htmlFor="inputEmail2">Confirma el correo electrónico</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" className="form-control" placeholder="password" required />
                                                <label htmlFor="inputPassword">Crea una contraseña</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" className="form-control" placeholder="password" required />
                                                <label htmlFor="inputPassword">¿Cómo quieres que te llamemos?</label>
                                            </div>
                                            <label className="mb-3">Esto aparece en tu perfil.</label>
                                            <label className="mb-2">¿Cuál es tu fecha de nacimiento?</label>
                                            <div className="form-label-group">
                                                <input type="date" id="inputDate" className="form-control" placeholder="02-09-2020" required  />
                                                <label htmlFor="inputDate" />
                                            </div>
                                            <label className="mb-2">¿Cuál es tu sexo?</label>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optradio" />Hombre</label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optradio" />Mujer</label>
                                            </div>
                                            <div className="form-check disabled">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optradio" />No Binario</label>
                                            </div>
                                            <label className="mt-3">Al hacer clic en Registrarte, aceptas los Términos y Condiciones de Uso de Hey Karaoke.</label>
                                            <button className="btn button btn-lg btn-primary btn-block text-uppercase mt-3" type="submit">REGISTRARTE</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
