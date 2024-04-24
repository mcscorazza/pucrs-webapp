import { useLocation } from "react-router-dom";
import MenuHeader from "../partials/Menu/MenuHeader";
import MenuLink from "../partials/Menu/MenuLink";

const Navbar = () => {

  return (
    <nav className="w-64 bg-slate-50 h-full">
      <MenuHeader title="Produto" 
        status={
          (useLocation().pathname == '/app/products' | useLocation().pathname == '/app/codes' | useLocation().pathname == '/app/types' | useLocation().pathname == '/app/units')
        } />
      <ul>
        <MenuLink to="products" title="Lista de Produtos" isActive={useLocation().pathname == '/app/products'} />
        <MenuLink to="codes" title="Códigos SPED" isActive={useLocation().pathname == '/app/codes'} />
        <MenuLink to="types" title="Tipos de Produto" isActive={useLocation().pathname == '/app/types'}  />
        <MenuLink to="units" title="Unidades de Medida" isActive={useLocation().pathname == '/app/units'}  />
      </ul>
      <MenuHeader title="Produção" status={
                  (useLocation().pathname == '/app/products1' | useLocation().pathname == '/app/products2')
      } />
      <ul>
        <MenuLink to="products1" title="Estrutura do Produtos"  isActive={useLocation().pathname == '/app/products1'} />
        <MenuLink to="products2" title="Ordem de Produção" isActive={useLocation().pathname == '/app/products2'}  />
      </ul>
      <MenuHeader title="Movimentação" status={
                  (useLocation().pathname == '/app/moves1' | useLocation().pathname == '/app/moves2' | useLocation().pathname == '/app/moves3')
      } />
      <ul>
        <MenuLink to="moves1" title="Entrada de NF"  isActive={useLocation().pathname == '/app/moves1'} />
        <MenuLink to="moves2" title="Faturamento"  isActive={useLocation().pathname == '/app/moves2'} />
        <MenuLink to="moves3" title="Ajuste e Inventário" isActive={useLocation().pathname == '/app/moves3'}  />
      </ul>
    </nav>
  );
};

export default Navbar;
