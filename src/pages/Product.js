import React from "react";

function Product({ productData }) {
  return (
    <div data-testid="product-page">
      <h2 data-testid="product-name">{productData.name}</h2>
      <p data-testid="product-description">{productData.description}</p>
      <button data-testid="add-to-cart-button">Adicionar ao carrinho</button>
    </div>
  );
}

export default Product;
