import { Link } from 'react-router-dom'
import '../Login/LoginPage.css'
import usePasswordTogle from '../../components/usePasswordTogle.jsx'

function LoginPage() {
  const [PasswordInputType, ToggleIcon] = usePasswordTogle();

  const HandleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1 className='TitleForm'>Faça o Seu Login</h1>
      <form onSubmit={HandleSubmit}>
        <div className="InputRegister">
          <input
            className="InputLogin"
            id='UserName'
            type="text"
            placeholder='Nome de Usuário* / E-mail*'
            required
          />
        </div>
        <div className="InputRegister">
          <div className="passwordLogin">
            <input
              className="InputLogin"
              id='Password'
              type={PasswordInputType}
              placeholder='Senha*'
              required
            />
            <span className="password-toogle-icon">{ToggleIcon}</span>
          </div>
        </div>
        <input
          type="submit"
          className='LoginButton'
          value="Entrar"
        />

        <p>Não tem uma conta?<Link to="/register"> Cadastre-se agora</Link></p>
      </form>
    </div>
  )
}

export default LoginPage
