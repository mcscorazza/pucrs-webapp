import { FilePenLine, X } from "lucide-react";

const ButtonCancel = (props) => {
  return (
    <button className="flex gap-2 h-9 px-3 outline-1 border-orange-800 border rounded bg-orange-800 hover:bg-orange-700 justify-center items-center text-slate-50">
        <X size={20} /> {props.text}
    </button>
  );
};

export default ButtonCancel;
