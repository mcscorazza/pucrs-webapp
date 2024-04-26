import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputText from "../partials/InputText";
import ButtonNew from "../partials/Buttons/ButtonNew";

const Login = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(data)

    localStorage.setItem("name", "Marcos Eduardo Corazza")

    navigate("/app/products")
  }


  return (
    <div className="w-full h-svh flex items-center bg-sky-950 justify-center flex-col gap-2 relative overflow-hidden">
      <div className="absolute w-[1000px] h-[1000px] bg-orange-800 rotate-45 translate-y-1/2 mt-20"></div>
      <img className="mt-24" src="generic-logo.svg" alt="" width={400} />
      <div className="h-full flex flex-col justify-center z-50">
        <div className="w-[600px] h-auto bg-slate-50/70 rounded-md text-slate-400 px-32 py-3 mt-[-100px] shadow-md">
          <h1 className="w-full text-orange-800 text-center text-2xl font-semibold pb-2">
            Entre com suas credenciais
          </h1>
          <form onSubmit={(e) => submit(e)}>
            <InputText
              onChange={handleData}
              type="text"
              ph="Entre com seu email"
              title="E-mail:"
              id="email"
              valeu={data.email}
            />
            <InputText
              onChange={handleData}
              type="password"
              ph="Digite sua senha"
              title="Senha:"
              id="password"
              value={data.password}
            />
            <div className="w-full flex flex-col items-center">
              <br />
              <ButtonNew text="Acessar Aplicação" />

              <div className="text-sm mt-5">
                Não está registrado?{" "}
                <Link className="text-sky-400" to="/register">
                  Registrar-se
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-8 w-full text-center bg-slate-400 z-50"> @2024 </div>
    </div>
  );
};

export default Login;
