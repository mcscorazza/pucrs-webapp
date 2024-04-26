import React from "react";
import { Link } from "react-router-dom";
import InputText from "../partials/InputText";
import ButtonNew from "../partials/Buttons/ButtonNew";

const Login = () => {
  return (
    <div className="w-full h-svh flex items-center bg-sky-950 justify-center flex-col gap-2 relative">
      <div className="absolute w-[1000px] h-[1000px] bg-orange-800 rotate-45 translate-y-1/2 mt-20 overflow-hidden"></div>
      <img className="mt-24" src="generic-logo.svg" alt="" width={400} />
      <div className="h-full flex flex-col justify-center z-50">
        <div className="w-[500px] h-auto bg-slate-50 rounded-md text-slate-400 px-16 py-6 mt-[-100px] shadow-md">
          <h1 className="w-full text-orange-800 text-center text-2xl font-semibold pb-4">
            Entre com suas credenciais
          </h1>
          <InputText
            type="text"
            ph="Entre com seu email"
            title="E-mail:"
            id="email"
          />
          <InputText
            type="password"
            ph="Digite sua senha"
            title="Senha:"
            id="password"
          />
          <div className="w-full flex flex-col items-center">
          <br />
            <ButtonNew text="Acessar Aplicação" />
            <div className="text-sm mt-5">
            Não está registrado? {" "}
            <Link className="text-sky-400" to="/register">Registrar-se</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 w-full text-center bg-slate-400 z-50"> @2024 </div>
    </div>
  );
};

export default Login;
