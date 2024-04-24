import SelectTypes from "../SelectTypes";
import SelectSpeds from "../SelectSpeds";
import SearchUnits from "./SearchUnits";
import CheckBox from "../CheckBox";

const HeaderUnits = () => {
  return (
    <div className="p-2 pb-6 flex items-end text-gray-500 gap-4">
      <SearchUnits />
      <SelectTypes />
      <SelectSpeds />
      <CheckBox title="Com Estoque" />
      <CheckBox title="Itens de Venda" />
    </div>
  );
};

export default HeaderUnits;
