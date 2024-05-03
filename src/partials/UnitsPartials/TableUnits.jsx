import ButtonEdit from '../Buttons/ButtonEdit'
import ButtonDelete from '../Buttons/ButtonDelete'

const TableUnits = ({ onClick, data }) => {
  return (
    <table className="w-full table-fixed text-left">
    <thead>
      <tr className="border-b-4 border-t-4 bg-gray-100 border-gray-100 text-slate-400 text-base h-8">
        <th className="w-20 pl-3 border-r-2 border-slate-300 text-center">ID</th>
        <th className="w-20 px-2 border-r-2 border-slate-300 text-center">U.M.</th>
        <th className="w-full px-2">Descrição</th>
        <th className="w-12 px-2"></th>
        <th className="w-12 px-2"></th>
      </tr>
    </thead>
    <tbody>
      {data?.map((unit) => (
        <tr key={unit.id} className="text-base border-b border-slate-200 text-slate-400 hover:bg-sky-50 hover:text-sky-800 h-12" >
          <td className="px-2 pt-1 text-center">{unit.id}</td>
          <td className="px-2 pt-1 text-center">{unit.short}</td>
          <td className="px-2 pt-1">{unit.name}</td>
          <td className="px-2"><ButtonEdit /></td>
          <td className="px-2"><ButtonDelete text="" id={unit.id} endpoint="units" onClick={onClick}/></td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default TableUnits