import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Configuração de rotas
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
//Pagina de Erro
import ErrorPage from './Pages/Error/ErrorPage.jsx'
//Pagina de Registro
import RegiterPage from './Pages/Register/RegisterPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path: "register",
    element: <RegiterPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
