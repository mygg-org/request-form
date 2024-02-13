import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../Login/LoginPage.css'
import usePasswordTogle from '../../components/usePasswordTogle.jsx'
import Header from '../../components/Logotipo/header.jsx';

function LoginPage() {
  const [PasswordInputType, ToggleIcon] = usePasswordTogle();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Aqui você faria a requisição para o backend para autenticar o usuário
    // Por simplicidade, vamos apenas verificar se o email e senha são válidos
    if (username === 'admin' && password === 'admin') {
      // Simulando o armazenamento do token de autenticação
      setLoggedIn(true);
    } else {
      alert('Credenciais inválidas')
    }
  }

  if (loggedIn) {
    return <Navigate to="/data"/>;
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="LoginContainer">
      <form onSubmit={handleSubmit}>
        <Header />
        <div className="InputRegister">
          <input
            className="InputLogin"
            id='UserName'
            type="text"
            value={username}
            placeholder='Nome de Usuário*'
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="InputRegister">
          <div className="passwordLogin">
            <input
              className="InputLogin"
              id='Password'
              value={password}
              type={PasswordInputType}
              onChange={(e) => setPassword(e.target.value)}
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
