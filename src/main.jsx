import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from "./routes/home";
import Produtos from "./routes/produtos/Produtos.jsx";
import AdicionarProduto from './routes/produtos/adicionar/index.jsx'
import EditarProduto from './routes/produtos/editar/index.jsx'
import ExcluirProduto from './routes/produtos/deletar/index.jsx'
import Error from './routes/Error.jsx'


const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/produtos/adicionar", element: <AdicionarProduto />},
      { path: "/produtos/editar/:id", element: <EditarProduto /> },
      { path: "/produtos/excluir/:id", element: <ExcluirProduto /> },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
