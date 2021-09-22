import React from "react";
import { data } from "../data/mockData";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div data-testid="home-page">
      <h2>Produtos disponíveis</h2>
      <ul data-testid="lista-produtos" className="product-list">
        {data.products.map((product, index) => (
          <li key={index} data-testid="produto">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
