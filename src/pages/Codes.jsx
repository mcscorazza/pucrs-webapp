import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import ModalTypes from "../components/Modals/ModalTypes";


import FooterControls from "../partials/FooterControls";
import ToolsTypes from "../partials/TypesPartials/ToolsTypes";
import HeaderTypes from "../partials/TypesPartials/HeaderTypes";
import TableCodes from "../partials/Codes/TableCodes";


const Codes = () => {
  const [openModal, setOpenModal] = useState(false);
  const [reload, setReload] = useState(true);
  const { data } = useFetch("http://127.0.0.1:8000/api/v1/speds/", reload);

  return (
    <>
      <div className="h-full bg-slate-100 p-2 w-full">
        <HeaderTypes />
        <div className="w-full min-h-52 rounded-md shadow-md p-2 text-xl bg-slate-50">
          <ToolsTypes onClick={() => {setOpenModal(true)}}/>
          <TableCodes data={data} onClick={() => setReload(!reload)}/>
          <FooterControls />
        </div>
      </div>

      <ModalTypes
        isOpen={openModal}
        setModal={() => setOpenModal(false)}
        setReload={() => setReload(!reload)}
      />
    </>
  );
};

export default Codes;