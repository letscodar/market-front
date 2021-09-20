import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../App";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        {data.products.map((product, index) => (
          <li key={index}>
            <NavLink exact to={`/${product.slug}`}>
              {product.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
