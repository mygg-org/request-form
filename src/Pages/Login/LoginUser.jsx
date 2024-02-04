import React from 'react'
import "../Login/LoginUser.css"
const LoginUser = () => {
  return (
    <div className='LoginContainer'>
      <input className="InputLogin" id='UserName' type="text" placeholder='Nome de Usuário* / E-mail*' required />
      <input className="InputLogin" id='Password' type="password" placeholder='Senha*' required />
      <div className="LastPassword">
        <a href="#" >Esqueceu a senha?</a>
      </div>
    </div>
  )
}

export default LoginUser