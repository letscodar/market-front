import React from "react";
import { render, logRoles } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../components/ProductCard";
import { BrowserRouter as Router } from "react-router-dom";

describe("funcionalidades do card de produto", () => {
  //
  let container;
  const mockProduct = {
    id: "001",
    name: "TV Samsung",
    slug: "tv-samsung",
    description: "TV Samsung de várias polegadas",
    price: 1899.99,
    img: "https://picsum.photos/id/48/250/250",
  };

  beforeEach(() => {
    container = render(
      <Router>
        <ProductCard product={mockProduct} />
      </Router>
    );
  });

  it("renderiza o nome do produto", () => {
    const { getByLabelText } = container;
    expect(getByLabelText("nome do produto")).toHaveTextContent(/TV Samsung/);
  });

  it("renderiza o preço do produto", () => {
    const { getByLabelText } = container;
    expect(getByLabelText("valor do produto")).toHaveTextContent(/1899.99/);
  });

  it("tem o link correto para a página do produto", () => {
    const { getByRole } = container;
    expect(getByRole("link")).toHaveAttribute("href", "/tv-samsung");
  });

  it("mostra a imagem do produto", () => {
    const { getByRole } = container;
    expect(getByRole("img")).toHaveAccessibleDescription(
      "TV Samsung de várias polegadas"
    );
  });
});
