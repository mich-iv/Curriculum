import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      {/* Menú */}
      <div>
        <h1>
          <Link to="/">Inicio</Link>
          <Link to="/acerca">Acerca</Link>
        </h1>
      </div>

      <Outlet />

      {/* Pie de página */}
      {/* <div>
        <h3>Footer</h3>
      </div> */}
    </React.Fragment>
  )
}