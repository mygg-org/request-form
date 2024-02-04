import { Link } from 'react-router-dom'
import RegisterPage from '../Register/RegisterPage.jsx'
import '../Login/LoginPage.css'

function LoginPage() {
  return (
    <div className="container">
      <h1 className='TitleForm'>Faça o Seu Login</h1>
      <form>
        <input className="InputLogin" id='UserName'  type="text" placeholder='Nome de Usuário* / E-mail*' required />
        <input className="InputLogin" id='Password'  type="password" placeholder='Senha*' required />
        <input type="submit"  className='LoginButton' value="Entrar"/>
        <p>Não tem uma conta?<Link to="/register"> Cadastre-se agora</Link></p>
      </form>
    </div>
  )
}

export default LoginPage
