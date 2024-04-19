import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Application = () => {
  return (
    <div className='app'>
        <h1>App</h1>
        <nav>
            <ul>
                <li><Link to="products">Produtos</Link></li>
                <li><Link to="codes">Codigos</Link></li>
                <li><Link to="types">Tipos</Link></li>
                <li><Link to="units">Unidades</Link></li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Application