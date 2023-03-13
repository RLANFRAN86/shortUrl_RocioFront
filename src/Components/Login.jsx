import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginAPI from "../service/postLogin";

function Login () {

    const navigate = useNavigate();

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleLoginSubmit(event) {
        event.preventDefault();
        const response = await loginAPI.postLogin( email, password);
        if (response && response.error) {
            console.error(response.error);
        } else {
            navigate('/landing');
        }
    }
    
    return (

        <section className="login">
            <form className="login-form" onSubmit={handleLoginSubmit}>
                    <div className='form-title'>
                        <h2 className='title-log-in'>Inicio de sesión</h2>
                        <h4 className='subtitle-login'>Introduce tus datos para iniciar sesión</h4>
                    </div>
                    <div className="login-inputs">
                        <div className="login-field">
                            <label htmlFor="email" className='title-input'>Email</label>
                            <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='kometa@kometa.com' id="email" />
                        </div>
                        <div className="login-field">
                            <label htmlFor="password" className='title-input'>Contraseña</label>
                            <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='*************' id="password" />
                        </div>
                        <button className='btn-login' type="submit">Inicio de sesión</button>
                    </div>
                </form>
        </section>

    )
}
export default Login