import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../../css/app.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import  {Exaplecontect} from "../context/contexto"


export const Inicio = () => {
    const example=useContext(Exaplecontect)


    const iniciar = async () => {
        let user = document.getElementById("loginName").value;
        let pasw = document.getElementById("loginPassword").value;
        let usur = {
            email: user,
            password: pasw
        }
        const response = await axios.post('/api/log', usur);
        
        example.setDatos(response.data)
        
        if (response.data.home === 'Login successful') {
            // Redirige al usuario a la página deseada
            window.location.href = '/admin';
        } else {
            alert("inicio de secion fallida");
        }


    }
    return (
        <div className="container1">
            <Navega />

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                        <div className="text-center mb-3">
                            <p>Sign in with:</p>
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <p className="text-center">or:</p>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" />
                            <label className="form-label" htmlFor="loginName">Email or username</label>
                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                        </div>


                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">

                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">

                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>


                        <button type="button" onClick={iniciar} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>


                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export const Navega = () => {
    const location = useLocation();

    let estilo = {};
    let estilo2 = {};

    switch (location.pathname) {
        case '/':
            estilo = { background: 'blue', color: 'white' };
            break;
        case '/registro':
            estilo2 = {
                background: 'blue',
                color: 'white'
            };
            break;
        default:

    }


    return (
        <div className="container">
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="tab-login" data-mdb-pill-init to="/" role="tab"
                        aria-controls="pills-login" aria-selected="true" style={estilo}>Login</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/registro" role="tab"
                        aria-controls="pills-register" aria-selected="false" style={estilo2}>Register</Link>
                </li>
            </ul>
        </div>
    );

}
export const Registro = () => {

    const guardar = async () => {
        let user = document.getElementById("registerUsername").value;
        let emai = document.getElementById("registerEmail").value;
        let pasw1 = document.getElementById("registerPassword").value
        let pasw2 = document.getElementById("registerRepeatPassword").value
        let pswd
        if (pasw1 === pasw2) {
            pswd = pasw1;
        }
        let guar = {
            nombreUser: user,
            email: emai,
            password: pswd
        }

        const response = await axios.post('/api/usuario', guar);

        console.log(response.data);
        if (response.data.home === 'Login successful') {
            // Redirige al usuario a la página deseada
            window.location.href = '/home';
        } else {
            alert("registro fallido");
        }



    }
    return (
        <div className="container1">
            <Navega />
            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div className="text-center mb-3">
                            <p>Sign up with:</p>
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control" />
                            <label className="form-label" htmlFor="registerUsername">Username</label>
                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control" />
                            <label className="form-label" htmlFor="registerEmail">Email</label>
                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                        </div>


                        <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                                aria-describedby="registerCheckHelpText" />
                            <label className="form-check-label" htmlFor="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>


                        <button type="button" onClick={guardar} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">Sign in</button>
                    </form>
                </div>
            </div>
        </div>

    );

}

