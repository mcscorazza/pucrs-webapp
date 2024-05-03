import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from './../components/Navbar';
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";


const Application = () => {
  const token = localStorage.getItem("token")

  return token ?
    <div className="flex grow h-svh flex-col text-base">
      {/* Topo */}
      <Header />
      {/* Sub Topo */}
      <SubHeader />
      {/* Bloco Principal */}
      <div className="w-full flex flex-row h-full">
        {/* Menu */}
        <Navbar />
        {/* Conteúdo */}
        <div className="text-base w-full h-full text-slate-700 flex flex-col items-center relative">
          <Outlet />
        </div>
      </div>
    </div >
  : <Navigate to="/" replace />;
};

export default Application;
