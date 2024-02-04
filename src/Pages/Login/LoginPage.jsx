import { Link } from 'react-router-dom'
import LoginUser from './LoginUser'
import Submit from './Submit.jsx'

function LoginPage() {

  return (
    <div className="container">
      <h1 className='TitleForm'>Faça o Seu Login</h1>
      <form action="GET">
        <LoginUser />
        <Submit />
        <p>Não tem uma conta?  <Link to="/register"><a href="#">Cadastre-se agora</a></Link></p>
      </form>
    </div>
  )
}

export default LoginPage
