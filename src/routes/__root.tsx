import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Acerca</Link>
      </div>
      <Outlet />
      <div>
        <h3>Footer</h3>
      </div>
    </React.Fragment>
  )
}