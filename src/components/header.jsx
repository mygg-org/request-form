import React from 'react';
import logo from '../components/public/img/logo-semeec.webp'; 
import "../components/Header.css"

console.log(logo); 

function Header() {

  return <img src={logo} alt="Logo" />;
}

export default Header;