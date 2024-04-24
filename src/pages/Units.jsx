import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import ModalUnits from "../components/Modals/ModalUnits";
import HeaderUnits from "../partials/UnitsPartials/HeaderUnits";
import ToolsUnits from "../partials/UnitsPartials/ToolsUnits";
import TableUnits from "../partials/UnitsPartials/TableUnits";
import FooterControls from "../partials/FooterControls";


const Units = () => {
  const [openModal, setOpenModal] = useState(false);
  const [reload, setReload] = useState(true);
  const { data } = useFetch("http://127.0.0.1:8000/api/v1/units/", reload);

  return (
    <>
      <div className="h-full bg-slate-100 p-2 w-full">
        <HeaderUnits />
        <div className="w-full min-h-52 rounded-md shadow-md p-2 text-xl bg-slate-50">
          <ToolsUnits onClick={() => {setOpenModal(true)}}/>
          <TableUnits data = {data} />
          <FooterControls />
        </div>
      </div>

      <ModalUnits
        isOpen={openModal}
        setModal={() => setOpenModal(false)}
        setReload={() => setReload(!reload)}
      />

    </>
  );
};

export default Units;
