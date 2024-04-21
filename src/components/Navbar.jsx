import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="w-64 bg-slate-100 h-full">
            <div className="px-2 h-16 text-5xl">LOGO</div>
            <div className="p-2 border-l-4 font-bold border-orange-800 text-xl">Produtos</div>
            <ul>
                <li className="py-2 pl-6 border-r-4 border-slate-200 hover:text-slate-400 hover:border-orange-800">
                    <Link to="products">Cadastro de Produtos</Link>
                </li>
                <li className="py-2 pl-6 border-r-4 border-slate-200 hover:text-slate-400 hover:border-orange-800">
                    <Link to="codes">Codigos</Link>
                </li>
                <li className="py-2 pl-6 border-r-4 border-slate-200 hover:text-slate-400 hover:border-orange-800">
                    <Link to="types">Tipos</Link>
                </li>
                <li className="py-2 pl-6 border-r-4 border-slate-200 hover:text-slate-400 hover:border-orange-800">
                    <Link to="units">Unidades</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar