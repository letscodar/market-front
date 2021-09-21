import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../pages/Product";

describe("funcionalidades da página de produto", () => {
  //
  const mockData = {
    id: "001",
    name: "Livro",
    slug: "livro",
    description: "Livro bem interessante",
  };

  it("renderiza informações do produto", () => {
    const produto = render(<Product productData={mockData} />);
    expect(produto.getByTestId("product-page")).toBeInTheDocument();
    expect(produto.getByTestId("product-name")).toHaveTextContent("Livro");
    expect(produto.getByTestId("product-description")).toHaveTextContent(
      "Livro bem interessante"
    );
    expect(produto.getByTestId("add-to-cart-button")).toBeInTheDocument();
    // expect(container.firstChild).toHaveTextContent("Produtos disponíveis");
  });
});
