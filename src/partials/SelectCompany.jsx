import React from 'react'

const SelectCompany = () => {
  return (
    <div className="flex flex-col items-start w-full">
    <label className="text-sm font-semibold text-sky-950"htmlFor="company">
      Empresa:
    </label>
    <select className="w-64 py-1 px-3 rounded-sm shadow-md" id="company">
      <option>...</option>
      <option>C | CUBE PRINT&PACK</option>
      <option>E | ESSENZA</option>
    </select>
  </div>
  )
}

export default SelectCompany