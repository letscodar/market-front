import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../App";

function Home() {
  return (
    <div data-testid="home-page">
      <h2>Produtos disponíveis</h2>
      <ul data-testid="lista-produtos">
        {data.products.map((product, index) => (
          <li key={index} data-testid="produto">
            <NavLink exact to={`/${product.slug}`} data-testid="product-link">
              {product.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
