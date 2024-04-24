import SelectTypes from "../SelectTypes";
import SelectSpeds from "../SelectSpeds";
import SearchTypes from "./SearchTypes";
import CheckBox from "../CheckBox";

const HeaderTypes = () => {
  return (
    <div className="p-2 pb-6 flex items-end text-gray-500 gap-4">
      <SearchTypes />
      <SelectTypes />
      <SelectSpeds />
      <CheckBox title="Com Estoque" />
      <CheckBox title="Itens de Venda" />
    </div>
  );
};

export default HeaderTypes;
