import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputText from "../partials/InputText";
import ButtonNew from "../partials/Buttons/ButtonNew";
import axios from "axios";

const Register = () => {
  const url = "http://127.0.0.1:8000/api/v1/users/";

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        setData({
          name: "",
          email: "",
          password: "",
        });
        console.log(res);
      });
  }

  return (
    <div className="w-full h-svh flex items-center bg-sky-950 justify-center flex-col gap-2 relative overflow-hidden">
      <div className="absolute w-[1000px] h-[1000px] bg-orange-800 rotate-45 translate-y-1/2 mt-20"></div>
      <img className="mt-24" src="generic-logo.svg" alt="" width={400} />
      <div className="h-full flex flex-col justify-center z-50">
        <div className="w-[700px] h-auto bg-slate-50/70 rounded-md text-slate-400 px-32 py-3 mt-[-100px] shadow-md">
          <h1 className="w-full text-orange-800 text-center text-2xl font-semibold pb-2">
            Entre com seus dados
          </h1>
          <form onSubmit={(e) => submit(e)}>
            <InputText
              onChange={handleData}
              type="text"
              ph="Entre com seu Nome"
              title="Nome:"
              id="name"
              value={data.name}
            />
            <InputText
              onChange={handleData}
              type="email"
              ph="Entre com seu email"
              title="E-mail:"
              id="email"
              value={data.email}
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
              <ButtonNew text="Confirmar Cadastro" />
              <div className="text-sm mt-2">
                Já possui cadastro?{" "}
                <Link className="text-sky-400" to="/">
                  Logar
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

export default Register;
