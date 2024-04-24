import { Home } from "lucide-react"
import { useLocation } from "react-router-dom"

const SubHeader = () => {
 
  const renderSwitch = (loc) => {
    switch(loc) {
      case "/app/products":
        return "Lista de Produtos";
      case "/app/codes":
        return "Códigos SPED"
      case "/app/types":
        return "Tipos de Produto"
      case "/app/units":
        return "Unidades de Medida"
    }
  }

  return (
    <div className="bg-white h-12 border-b-2 flex flex-row w-full items-center px-4 text-xl font-semibold text-orange-800">
      <Home className="mr-2" size='20'/>{ renderSwitch(useLocation().pathname) }
    </div>
  )
}

export default SubHeader