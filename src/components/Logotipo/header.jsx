import React from 'react';
import logo from '../../../public/img/logo-semeec.webp'; 
import "../Logotipo/Header.css"

console.log(logo); 

function Header() {

  return <img src={logo} alt="Logo" />;
}

export default Header;