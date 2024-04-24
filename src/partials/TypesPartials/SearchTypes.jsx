import { Search } from "lucide-react";

const SearchTypes = () => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold" htmlFor="search_unit">Buscar por Descrição, código, tipo, etc</label>
      <div className="flex">
        <input className="w-96 outline outline-1 outline-gray-200 rounded-l-sm h-7" type="text" id="search_unit" />
        <button className="flex h-7 w-16 outline-1 border-sky-900 border rounded-r bg-sky-900 hover:bg-sky-800 justify-center items-center text-slate-50"><Search size="20" /></button>
      </div>
    </div>
  );
};

export default SearchTypes;
