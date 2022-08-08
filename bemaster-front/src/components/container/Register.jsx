import React from 'react'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { register } from '../../redux/actions/index';

function Register() {
    
    const [usuario, setUsuario] = useState({
        user_name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleInputChange(e) {
        e.preventDefault();
        setUsuario((input) => ({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!e.target.checkValidity()) {
            console.log("Formulario no valido");
        } else {
            console.log("Formulario valido");
            dispatch(register(usuario));
            setUsuario({
                user_name: '',
                email: '',
                password: ''
            });
            navigate("/login");
        };
    };

    return (
        <div>
            <section className="h-100">
                <div className="container h-100">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="fs-4 card-title fw-bold mb-4">LogUp</h1>
                                    <form onSubmit={(e) => handleSubmit(e)} className="needs-validation" noValidate={true} autoComplete="off">

                                    <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="userName">Nombre de usuario</label>
                                            <input id="user_name" type="text" onChange={handleInputChange} value={usuario.user_name} className="form-control" name="user_name" required autoFocus />
                                            <div className="invalid-feedback">
                                                Nombre de usuario no valido
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">Correo electronico</label>
                                            <input id="email" type="text" onChange={handleInputChange} value={usuario.email} className="form-control" name="email" required autoFocus />
                                            <div className="invalid-feedback">
                                                Usuario inválido
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="password">Contraseña</label>
                                            <input id="password" type="password" onChange={handleInputChange} value={usuario.password} className="form-control" name="password" required />
                                            <div className="invalid-feedback">
                                                Contraseña es requirida
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button type="submit" className="btn btn-primary ms-auto">
                                                <i className="bi bi-box-arrow-in-right"></i> Ingresar
                                            </button>
                                        </div>

                                        <div className="mb-2 w-100">
                                      <label className="text-muted" htmlFor="">¿Ya tienes una cuenta?</label>
                                      <a href="/login" className="float-end">
                                          Iniciar sesion
                                      </a>
                                  </div>
                                    </form>
                                </div>
                                <div className="card-footer py-3 border-0">
                                    <div className="text-center">
                                        Todos los derechos reservados &copy; 2022 CorreaCompany
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
