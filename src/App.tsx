import './App.css'
import { PrimerEscena } from './secciones/3d/primerEscena'
import { Outlet } from 'react-router-dom'

function App() {
  // PrimerEscena();

  return (
    <>
      <div>
        Hola
      </div>
      {/* <canvas id="canvas" width="800" height="600"></canvas> */}
      <Outlet />
    </>
  )
}

export default App
