import React, { useState } from 'react'
import '../Register/Register.css'
import { Link } from 'react-router-dom'
import usePasswordTogle from '../../components/usePasswordTogle.jsx'


const RegisterPage = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordTogle();

  const HandleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div  className='LoginContainer'>
      <h1>Realize Seu Cadastro!</h1>
      <form onSubmit={HandleSubmit}>
        <div className="containerRegister">
          <div className="InputRegister">
            <input className='RegisterInput' type="text" id='email' name="email" placeholder='Digite seu E-mail*' required />
          </div>
          <div className="InputRegister">
            <input className='RegisterInput' type="text" id='name' name='name' placeholder='Digite seu Nome Completo*' required />
          </div>
          <div className="InputRegister">
            <input className='RegisterInput' type="text" id='username' placeholder='Digite seu Nome de Usuário*' required />
          </div>
          <div className="InputRegister">
            <div className="passwordLogin">
              <input className='RegisterInput' type={PasswordInputType} id='password' placeholder='Crie sua senha*'
                required />
              <span className="password-toogle-icon">{ToggleIcon}</span>
            </div>
          </div>
          <input type="submit" className='LoginButton' value="Criar Conta" />
          <div className="LastPassword">
            <p>Já tem cadastro? <Link to="/">Faça o seu Login!</Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage