import axios from "axios";
import { Trash2 } from "lucide-react";

const ButtonDelete = (props) => {
  const deleteItem = async (id, endpoint) => {
    const config = {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }};
    const urlBase = import.meta.env.VITE_LINK_API;
    const url = urlBase + "/api/v1";
    console.log(url)
    await axios.delete(url + "/" + endpoint + "/" + id, config);
    props.onClick()
  };

  return (
    <button
      className="flex gap-2 h-9 px-3 outline-1 border-orange-800 border rounded bg-orange-800 hover:bg-orange-700 justify-center items-center text-slate-50"
      onClick={() => {
        deleteItem(props.id, props.endpoint); 
      }}
      >
      <Trash2 size={20} />
      {props.text}
    </button>
  );
};

export default ButtonDelete;
