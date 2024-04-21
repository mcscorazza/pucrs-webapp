import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './../components/Navbar';


const Application = () => {
  return (
    <div className="flex grow h-svh flex-col">
      {/* Topo */}
      <div className="w-full bg-sky-950 text-white text-2xl">
        <div class="h-12 bg-sky-900 text-white flex items-center  justify-between overflow-hidden relative">
          <div class="w-96 h-96 bg-amber-900 absolute top-[-60px] right-[-50px] rotate-[60deg]"></div>
        </div>
      </div>
      {/* Sub Topo */}
      <div className="bg-white h-12 border-b-2 flex flex-col w-full"></div>

      {/* Bloco Principal */}
      <div className="w-full flex flex-row h-full">
        {/* Menu */}
        <Navbar />
        {/* Conteúdo */}
        <div className="text-3xl w-full h-full text-slate-700 flex flex-col items-center justify-center relative">
          <Outlet />
        </div>
      </div>
    </div >
  );
};

export default Application;
