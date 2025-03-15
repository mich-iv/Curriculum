// import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '',
        element: <div>inicio</div>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('raiz')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
)

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
