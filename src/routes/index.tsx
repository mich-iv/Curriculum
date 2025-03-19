import { createFileRoute } from '@tanstack/react-router'
import {MostrarTexto} from '../components/mostrarTexto.tsx'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>
        <h2>Michelle Ivan Gasca Olvera</h2>
        <MostrarTexto/>
      </div>
    </>
  );
}
