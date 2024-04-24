import React from 'react'

const SelectSpeds = () => {
  return (
    <div className="flex flex-col">
    <label className="text-sm font-bold" htmlFor="type_sped">
      Codigo SPED
    </label>
    <select className="h-7 w-52 text-sm text-gray-400 outline outline-1 outline-gray-200 rounded-sm p-1" id="type_sped">
      <option>...</option>
      <option>01 | Matéria Prima</option>
      <option>02 | Embalagem</option>
      <option>03 | Material de Consumo</option>
      <option>04 | Produto Acabado</option>
      <option>05 | Produto Intermediário</option>
    </select>
  </div>
  )
}

export default SelectSpeds