import axios from "axios";
import { Trash2 } from "lucide-react";

const ButtonDelete = (props) => {
  const deleteItem = async (id, endpoint) => {
    const urlBase = "http://127.0.0.1:8000/api/v1";
    await axios.delete(urlBase + "/" + endpoint + "/" + id);
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
