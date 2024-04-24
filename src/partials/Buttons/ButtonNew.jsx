import { Check } from "lucide-react";

const ButtonNew = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex gap-3 h-9 px-3 outline-1 border-sky-900 border rounded bg-sky-900 hover:bg-sky-800 justify-center items-center text-slate-50" >
      <Check />  {props.text }
    </button>
  );
};

export default ButtonNew;
