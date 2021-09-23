import React from "react";
import { useSelector } from "react-redux";

function Carrinho() {
  //
  const carrinho = useSelector((state) => state.carrinho.value);

  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {carrinho.map((item) => (
          <li>
            {item.name}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrinho;
