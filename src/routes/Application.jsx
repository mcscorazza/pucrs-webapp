import React from "react";
import { Link, Outlet } from "react-router-dom";

const Application = () => {
  return (
    <div className="flex grow h-svh">
      <nav className="w-64 bg-slate-100">
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
      <div className="w-full flex flex-col items-center justify-center">
        <div className="px-3 h-16 w-full bg-sky-950 border-b-4 border-slate-500 text-white text-2xl">TOPO</div>
        <div className="text-3xl h-full text-slate-700 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Application;
