import React from "react";
import MenuHeader from "../partials/Menu/MenuHeader";
import MenuLink from "../partials/Menu/MenuLink";

const Navbar = () => {
  return (
    <nav className="w-64 bg-slate-50 h-full">
      <MenuHeader title="Produto" status={true} />
      <ul>
        <MenuLink to="products" title="Lista de Produtos" status={true} />
        <MenuLink to="codes" title="Códigos SPED" />
        <MenuLink to="types" title="Tipos de Produto" />
        <MenuLink to="units" title="Unidades de Medida" />
      </ul>
      <MenuHeader title="Produção" status={false} />
      <ul>
        <MenuLink to="products" title="Estrutura do Produtos" />
        <MenuLink to="products" title="Ordem de Produção" />
      </ul>
      <MenuHeader title="Movimentação" status={false} />
      <ul>
        <MenuLink to="moves" title="Entrada de NF" />
        <MenuLink to="moves" title="Faturamento" />
        <MenuLink to="moves" title="Ajuste e Inventário" />
      </ul>
    </nav>
  );
};

export default Navbar;
