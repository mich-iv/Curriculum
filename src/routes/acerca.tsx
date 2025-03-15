import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/acerca')({
  component: RouteComponent,
})

function RouteComponent() {
  return <h3>Hello "/acerca"!</h3>
}
