import React from "react";
import { useDispatch } from "react-redux";
import { data } from "../data/mockData";
import { removeFromCarrinho } from "../features/carrinho/carrinhoSlice";

function CarrinhoItem({ carrinhoItemInfo }) {
  //
  const dispatch = useDispatch();

  const handleRemoveFromCarrinho = () => {
    dispatch(removeFromCarrinho(carrinhoItemInfo));
  };

  const itemInfoFromData = data.products.find(
    (item) => item.id === carrinhoItemInfo.id
  );

  return (
    <li className="carrinho-item">
      <strong>{itemInfoFromData.name}</strong>
      {/* <input type="number" value={carrinhoItemInfo.amount} /> */}
      {" | "}
      <span aria-label="quantidade de itens">{carrinhoItemInfo.amount}</span>
      {" | "}
      <button onClick={handleRemoveFromCarrinho}>Remover</button>
    </li>
  );
}

export default CarrinhoItem;
