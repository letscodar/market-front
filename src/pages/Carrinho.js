import React from "react";
import { useSelector } from "react-redux";
import CarrinhoItem from "../components/CarrinhoItem";

function Carrinho() {
  //
  const carrinho = useSelector((state) => state.carrinho.value);

  return (
    <div id="carrinho">
      <h1>Carrinho</h1>
      <ul className="lista-produtos">
        {carrinho.map((item) => (
          <CarrinhoItem carrinhoItemInfo={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Carrinho;
