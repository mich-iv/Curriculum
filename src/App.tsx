import './App.css'
import { PrimerEscena } from './secciones/3d/primerEscena'

function App() {
  PrimerEscena();

  return (
    <>
      <div>
        Hola
      </div>
      <canvas id="canvas" width="800" height="600"></canvas>
    </>
  )
}

export default App
