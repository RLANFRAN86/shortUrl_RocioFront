import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Api from '../service/postAPI';

function Form() {

    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');


    async function handleLoginSubmit(event) {
        event.preventDefault();
        const response = await Api.postAPI(name, email, password);
        if (response.error) {
            console.error(response.error);
        } else {
            navigate('/login');
        }
    }

    return (
        <section className='register'>
            <div className="conteinerContent">
                {/* <div className="navBarUno"><NavLogin /></div> */}
                <div className="conteinerform" >
                <form className="register-form" onSubmit={handleLoginSubmit} >
                    <div className='form-register-title'>
                        <h2 className='title-register'>Registro</h2>
                        <h4 className='subtitle-register'>Introduce tus datos para el registro</h4>
                    </div>

                    <div className="register-inputs">
                        <div className="register-field">
                            <label htmlFor="name" className='title-register-input'>Nombre</label>
                            <input className='register-input' value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder='Nombre' id="name" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="email" className='title-register-input'>Email</label>
                            <input className='register-input' value={email} onChange={(e) => setEmail(e.target.value)} type="lastname" required placeholder='hola@shorturl.com' id="lastname" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="password" className='title-register-input'>Contraseña</label>
                            <input className='register-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='*************' id="password" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="confirmpassword" className='title-register-input'>Confirme Contraseña</label>
                            <input className='register-input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required placeholder='*************' id="confirmpassword" />
                        </div>
                        <button className='btn-registers' type="submit">Registrarme</button>
                    </div>
                </form>

                </div>
            </div>
        </section>
    );
}
export default Form