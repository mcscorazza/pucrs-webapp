import { FilePenLine } from "lucide-react";

const ButtonEdit = (props) => {
  return (
    <button className="flex gap-2 h-9 px-3 outline-1 border-sky-900 border rounded bg-sky-900 hover:bg-sky-800 justify-center items-center text-slate-50">
        <FilePenLine size={20} /> {props.text}
    </button>
  );
};

export default ButtonEdit;
