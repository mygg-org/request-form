import { Link } from 'react-router-dom'
import '../Login/LoginPage.css'
import usePasswordTogle from '../../components/usePasswordTogle.jsx'
import Header from '../../components/Logotipo/header.jsx';

function LoginPage() {
  const [PasswordInputType, ToggleIcon] = usePasswordTogle();


  const HandleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <Header />
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

      </form>
    </div>
  )
}

export default LoginPage
