import { createFileRoute } from '@tanstack/react-router'
// import {MostrarTexto} from '../components/mostrarTexto.tsx'
import {} from './componentes/MostrarTexto.tsx'

export const Route = createFileRoute('/acerca')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <>
        <div>
          <h2>Acerca de</h2>
          <MostrarTexto/>
        </div>
      </>
    );
}
