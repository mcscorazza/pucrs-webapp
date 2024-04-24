import React from 'react'

const SelectTypes = () => {
  return (
    <div className="flex flex-col">
    <label className="text-sm font-bold" htmlFor="">
      Tipo de Produto
    </label>
    <select className="h-7 w-52 text-sm text-gray-400 outline outline-1 outline-gray-200 rounded-sm p-1" id="product_type">
      <option>...</option>
      <option>VD | Frasco de Vidro</option>
      <option>VD | Frasco de Vidro</option>
      <option>VD | Frasco de Vidro</option>
      <option>VD | Frasco de Vidro</option>
      <option>VD | Frasco de Vidro</option>
    </select>
  </div>
  )
}

export default SelectTypes