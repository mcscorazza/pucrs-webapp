import { useState } from "react";
import axios from "axios";


const ModalSpeds = ({ isOpen, setModal, setReload }) => {

    const config = {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }};

    const urlBase = import.meta.env.VITE_LINK_API
    const url = urlBase + "/api/v1/speds/";
    const [data, setData] = useState({
      sped_code: "",
      sped_description: ""
    });

    function handleData(e) {
        const newData = {...data};
        newData[e.target.id]=e.target.value;
        setData(newData);
    }

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
          sped_code:data.sped_code,
          sped_description: data.sped_description
        }, config )
        .then(res=>{
            setData({
              sped_code: "",
              sped_description: ""
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
            <div className="text-slate-500">Cadastro de códigos SPED</div>
            <button className="w-8 h-8 font-semibold m-1 rounded-sm bg-slate-200" onClick={setModal}>X</button>
          </div>

          <div className="w-5/6 flex flex-col items-center">
            <form className="w-full  flex flex-col items-center gap-2 text-xl" onSubmit={(e) => submit(e)}>
              <div className="w-full">
                <label className="text-sm" htmlFor="sped_code">Código SPED:</label>
                <input
                  className="w-full px-2 py-1"
                  onChange={(e)=>handleData(e)}
                  name="sped_code"
                  id="sped_code"
                  value={data.sped_code}
                  placeholder="Código SPED"
                  type="text"

                />
              </div>
              <div className="w-full">
                <label className="text-sm" htmlFor="sped_description">Descrição:</label>
                <input
                  className="w-full px-2 py-1"
                  onChange={(e)=>handleData(e)}
                  name="sped_description"
                  id="sped_description"
                  value={data.sped_description}
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

export default ModalSpeds;
