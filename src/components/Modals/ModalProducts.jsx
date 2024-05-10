import { useState } from "react";
import axios from "axios";
import InputText from "../../partials/InputText";
import ButtonNew from "../../partials/Buttons/ButtonNew";
import ButtonCancel from "../../partials/Buttons/ButtonCancel";
import InputTextInactive from "../../partials/InputTextInactive";
import SelectCompany from "../../partials/SelectCompany";

import NoImage from '/no-image.png'

const ModalProducts = ({ isOpen, setModal, setReload }) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const urlBase = import.meta.env.VITE_LINK_API;
  const url = urlBase + "/api/v1/units/";
  const [data, setData] = useState({
    unit_short: "",
    unit_name: "",
  });

  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(
        url,
        {
          unit_short: data.unit_short,
          unit_name: data.unit_name,
        },
        config
      )
      .then((res) => {
        setData({
          unit_short: "",
          unit_name: "",
        });
        setModal();
        setReload();
      });
  }

  if (isOpen == false) {
    return <div className="invisible"></div>;
  } else {
    return (
      <div className="visible w-full h-full absolute bg-slate-950/80 flex items-center justify-center text-xl">
        <div className="w-auto rounded-md shadow-md bg-slate-100 flex flex-col items-center p-2">
          <div className="w-full flex justify-between border-b border-slate-300 mb-4">
            <div className="text-slate-500">Cadastro de Produto</div>
            <button
              className="w-8 h-8 font-semibold m-1 rounded-sm bg-slate-200"
              onClick={setModal}
            >
              X
            </button>
          </div>

          <div className="w-full px-4 flex flex-col items-center">
            <form
              className="w-full flex flex-col items-center gap-2 text-xl"
              onSubmit={(e) => submit(e)}
            >
              <div className="flex w-full gap-3">
                <div className="border w-[500px]">
                  <div className="w-full flex gap-3">
                    <InputTextInactive
                      type="text"
                      title="Código:"
                      name="name"
                      id="product"
                      ph="CODIGO"
                      value=""
                    />
                    <SelectCompany />
                  </div>
                  <div className="w-full">
                    <InputText
                      type="text"
                      title="Descrição do Produto"
                      name="desc"
                      id="desc"
                      ph="Descrição do Produto"
                      value=""
                    />
                  </div>
                </div>
                <div className="w-[300px] h-[400px] flex rounded-md border shadow-sm">
                  <div className="flex items-center justify-center">
                    <img src={NoImage} className="w-full h-auto"/>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 my-4">
                <ButtonCancel text="Cancelar" />
                <ButtonNew text="Cadastrar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalProducts;
