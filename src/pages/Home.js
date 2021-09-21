import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../App";

function Home() {
  return (
    <div data-testid="home-page">
      <h2>Produtos disponíveis</h2>
      <div data-testid="lista-produtos" className="product-list">
        {data.products.map((product, index) => (
          <div key={index} data-testid="produto">
            <NavLink
              exact
              to={`/${product.slug}`}
              data-testid="product-link"
              className="product-card"
            >
              <div className="product-img">
                <img src={product.img} alt={product.name} />
              </div>
              <p className="product-name">{product.name}</p>
              <p className="product-price">R$ {product.price}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
