import { useState } from "react";
import axios from "axios";


const ModalTypes = ({ isOpen, setModal, setReload }) => {
    const url = "http://127.0.0.1:8000/api/v1/types/";
    const [data, setData] = useState({
        type_code: "",
        type_name: ""
    });

    function handleData(e) {
        const newData = {...data};
        newData[e.target.id]=e.target.value;
        setData(newData);
    }

    function submit(e) {
        e.preventDefault();
        axios.post(url,{
          type_code: data.type_code,
          type_name: data.type_name
        })
        .then(res=>{
            setData({
              type_code: "",
              type_name: ""
            })
            setModal()
            setReload()
        })
    }

  if (isOpen == false) {
    return <div className="invisible"></div>;
  } else {
    return (
      <div className="visible w-full h-full absolute bg-slate-950/80 flex items-center justify-center text-xl">
        <div className="w-[500px] rounded-md shadow-md bg-slate-100 flex flex-col items-center p-2">
          <div className="w-full flex justify-between border-b border-slate-300 mb-4">
            <div className="text-slate-500">Cadastro de Tipos de Produto</div>
            <button className="w-8 h-8 font-semibold m-1 rounded-sm bg-slate-200" onClick={setModal}>X</button>
          </div>

          <div className="w-5/6 flex flex-col items-center">
            <form className="w-full  flex flex-col items-center gap-2 text-xl" onSubmit={(e) => submit(e)}>
              <div className="w-full">
                <label className="text-sm" htmlFor="type_code">Código:</label>
                <input
                  className="w-full px-2 py-1"
                  onChange={(e)=>handleData(e)}
                  name="type_code"
                  id="type_code"
                  value={data.type_code}
                  placeholder="Código do Tipo de Produto"
                  type="text"

                />
              </div>
              <div className="w-full">
                <label className="text-sm" htmlFor="type_name">Descrição:</label>
                <input
                  className="w-full px-2 py-1"
                  onChange={(e)=>handleData(e)}
                  name="type_name"
                  id="type_name"
                  value={data.type_name}
                  placeholder="Descrição"
                  type="text"
                />
              </div>

              <button className="px-5 py-2 bg-sky-950 text-white rounded-sm mt-4">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalTypes;
