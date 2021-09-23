import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/carrinho/carrinhoSlice";

function Product({ productData }) {
  //
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        name: productData.name,
      })
    );
  };

  return (
    <div data-testid="product-page">
      <h1 data-testid="product-name">{productData.name}</h1>
      <p data-testid="product-description">{productData.description}</p>
      <button data-testid="add-to-cart-button" onClick={handleAddToCart}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default Product;
