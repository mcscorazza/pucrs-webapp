import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import FooterControls from "../partials/FooterControls";
import ToolsTypes from "../partials/TypesPartials/ToolsTypes";
import HeaderTypes from "../partials/TypesPartials/HeaderTypes";
import TableProducts from "../partials/ProductsPartials/TableProducts";
import ModalProducts from "../components/Modals/ModalProducts";


const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [reload, setReload] = useState(true);
  const { data } = useFetch("http://127.0.0.1:8000/api/v1/products/", reload);

  return (
    <>
      <div className="h-full bg-slate-100 p-2 w-full">
        <HeaderTypes />
        <div className="w-full min-h-52 rounded-md shadow-md p-2 text-xl bg-slate-50">
          <ToolsTypes onClick={() => {setOpenModal(true)}}/>
          <TableProducts data = {data} onClick={() => setReload(!reload)} />
          <FooterControls />
        </div>
      </div>

      <ModalProducts
        isOpen={openModal}
        setModal={() => setOpenModal(false)}
        setReload={() => setReload(!reload)}
      />

    </>
  );
};

export default Products;