import React from "react";
import { useDispatch } from "react-redux";
import { addToCarrinho } from "../features/carrinho/carrinhoSlice";

function Product({ productData }) {
  //
  const dispatch = useDispatch();

  const handleAddToCarrinho = () => {
    dispatch(
      addToCarrinho({
        id: productData.id,
        amount: 1,
      })
    );
  };

  return (
    <div data-testid="product-page">
      <h1 data-testid="product-name">{productData.name}</h1>
      <img src={productData.img} alt={productData.description} width={240} />
      <p data-testid="product-description">{productData.description}</p>
      <button data-testid="add-to-cart-button" onClick={handleAddToCarrinho}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default Product;
