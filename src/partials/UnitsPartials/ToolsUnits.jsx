import ButtonNew from "../Buttons/ButtonNew";
import ButtonEdit from "../Buttons/ButtonEdit";
import ButtonDelete from "../Buttons/ButtonDelete";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ToolsUnits = (props) => {

  return (
       <div className="flex gap-2 pb-3 justify-between">
        <div className="flex gap-2">
        <ButtonNew text="Cadastrar Novo" onClick={props.onClick} />
        <ButtonEdit text="Editar" />
        <ButtonDelete text="Excluir" />
       </div>
        <div className="flex items-center gap-2">
          <button className="inline h-8 bg-gray-100 hover:bg-gray-200 px-4 rounded-l-md text-sm text-slate-400 border border-gray-200">
            <ChevronLeft />
          </button>
          <p className="p-2 text-sm font-bold inline">
            <input className="w-5 text-center text-gray-500 outline outline-1 outline-gray-200 rounded-sm h-5"
              type="text" name="" id="" value="1" />{" "} de 3
          </p>
          <button className="inline h-8 bg-gray-100 hover:bg-gray-200 px-4 rounded-r-md text-sm text-slate-400 border border-gray-200">
            <ChevronRight />
          </button>
          <select className="h-7 w-28 text-base text-gray-400 outline outline-1 outline-gray-200 rounded-sm p-1"
            name="" id="" >
            <option value="">10/página</option>
          </select>
        </div>
      </div>
  )
}

export default ToolsUnits;
