import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from "./components/Home.jsx";
import Produtos from "./components/Produtos/Produtos.jsx";
import EditarProdutos from './components/Produtos/EditarProduto.jsx'
import Error from './components/Error.jsx'
import ExcluirProdutos from './components/Produtos/ExcluirProdutos.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App/>, 
  children: [
    {path: "/", element: <Home/>},
    {path: "/produtos", element: <Produtos/>},
    {path: "/produtos/editar/:id", element: <EditarProdutos/>},
    {path: "/produtos/excluir/:id", element: <ExcluirProdutos/>},
    {path: "*", element: <Error/>}
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
