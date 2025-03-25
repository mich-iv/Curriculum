import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom'
import {createHashRouter, RouterProvider} from 'react-router-dom'

import Home from './rutas/secciones/inicio.jsx'
import Awards from './rutas/secciones/acerca.jsx'
import Books from './rutas/secciones/experiencia.jsx'
import Login from './rutas/usuario/login.jsx'
import Agregar from './rutas/datos/agregar.jsx'
import Error from './rutas/secciones/error.jsx'
import Menu from './rutas/menu/Menu.jsx'
import Inicio from './rutas/secciones/inicio.jsx'
import Acerca from './rutas/secciones/acerca.jsx'
import Experiencia from './rutas/secciones/experiencia.jsx'
import Plantilla from './rutas/secciones/plantilla.jsx'

import { HelmetProvider } from 'react-helmet-async';
import Informacion from './rutas/secciones/informacion.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Plantilla style={"secciones"}/>,
    errorElement: <Error/>,
    children: [
      {
        path:'/',
        element: <Inicio/>
      },
      {
        path:'/acerca',
        element: <Acerca/>
      },
      {
        path:'/experiencia',
        element: <Experiencia/>
      },
      {
        path:'/informacion',
        element: <Informacion/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/agregar/:ubicacion',
        element: <Agregar/>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('raiz')).render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router} future={{v7_startTransition: true,v7_relativeSplatPath: true,}}/>
      {/* <BrowserRouter future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
        <div className='menu'>
          <Menu/>
        </div>
        <div className='contenido'>
          <Routes>
            <Route path="/" element={<Plantilla />} />
            <Route path="/acerca" element={<Acerca/>} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/agregar/*" element={<Agregar />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter> */}
    </React.StrictMode>
  </HelmetProvider>,
)


