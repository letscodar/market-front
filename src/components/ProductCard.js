import React from "react";
import { NavLink } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <NavLink
      exact
      to={`/${product.slug}`}
      data-testid="product-link"
      className="product-card"
    >
      <div>
        {product.name} | R$ {product.price}
      </div>
    </NavLink>
  );
}

export default ProductCard;
