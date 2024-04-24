import ButtonEdit from '../Buttons/ButtonEdit'
import ButtonDelete from '../Buttons/ButtonDelete'

const TableTypes = ({ onClick, data }) => {
  return (
    <table className="w-full table-fixed text-left">
    <thead>
      <tr className="border-b-4 border-t-4 bg-gray-100 border-gray-100 text-slate-400 text-base h-8">
        <th className="w-20 pl-3 border-r-2 border-slate-300 text-center">ID</th>
        <th className="w-20 px-2 border-r-2 border-slate-300 text-center">Cód.</th>
        <th className="w-full px-2">Descrição</th>
        <th className="w-16 px-2"></th>
        <th className="w-16 px-2"></th>
      </tr>
    </thead>
    <tbody>
      {data?.map((type) => (
        <tr key={type.id} className="text-base border-b border-slate-200 text-slate-400 hover:bg-sky-50 hover:text-sky-800 h-12" >
          <td className="px-2 pt-1 text-center">{type.id}</td>
          <td className="px-2 pt-1 text-center">{type.code}</td>
          <td className="px-2 pt-1">{type.name}</td>
          <td className="px-4"><ButtonEdit /></td>
          <td className="px-4"><ButtonDelete text="" id={type.id} endpoint="types" onClick={onClick}/></td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default TableTypes