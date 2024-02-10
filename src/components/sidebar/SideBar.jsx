import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../sidebar/SideBar.css"
import Header from '../Logotipo/header';

const SideBar = () => {
  return (
    <div className='sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100'>
      <div>
        <a href="" className='d-flex align-items-center text-white text-decoration-none '>
          <Header/>
        </a>
        <hr className='text-secundary mt-2' />
        <ul className='nav nav-pills flex-column p-0 m-0'>
          <li className='nav-item p-1'>
            <a href="" className='nav-link text-white'>
              <i className='bi bi-laptop me-2'></i>
              <span className='fs-5'>Usuários do Sistema</span>
            </a>
          </li>
          <li className='nav-item p-1'>
            <a href="" className='nav-link text-white'>
              <i className='bi bi-people me-2'></i>
              <span className='fs-5'>Pessoas</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <hr className='text-secondary' />
        <i className='bi bi-person fs-5'></i>
        <span> Helysson</span>
      </div>
    </div>
    )
}

export default SideBar