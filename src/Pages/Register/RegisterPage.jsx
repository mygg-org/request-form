import React from 'react'
import "../Login/LoginButton.css"
import '../Login/LoginUser.css'
import '../Register/Register.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
      <h1>Realize Seu Cadastro!</h1>
      <form action="GET">
        <div className="containerRegister">
          <div className="InputRegister">
            <input className='RegisterInput' type="text" id='email' placeholder='Digite seu E-mail*' required />
            <input className='RegisterInput' type="text" id='name' placeholder='Digite seu Nome Completo*' required />
          </div>
          <div className="InputRegister">
            <input className='RegisterInput' type="text" id='username' placeholder='Digite seu Nome de Usuário*' required />
            <input className='RegisterInput' type="password" id='password' placeholder='Crie sua senha*' required />
          </div>
          <Link to="">
            <button className='LoginButton'>Cadastrar</button>
          </Link>
          <div className="LastPassword">
            <p>Já tem cadastro? <Link to="/"><a>Faça o seu Login!</a></Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage