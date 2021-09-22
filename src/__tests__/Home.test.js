import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/Home";

describe("funcionalidades da home", () => {
  //
  it("renderiza título da página", () => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByTestId("home-page")).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent("Produtos disponíveis");
  });

  it("renderiza lista de produtos", () => {
    const { getByTestId, getAllByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByTestId("lista-produtos")).toBeInTheDocument();
    const produtos = getAllByTestId("produto");
    produtos.forEach((produto) =>
      expect(produto).toHaveAttribute("data-testid", "produto")
    );
  });

  it("cada produto tem o link sua página", () => {
    const { getByTestId, getAllByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByTestId("lista-produtos")).toBeInTheDocument();
    const produtos = getAllByTestId("produto");
    produtos.forEach((produto) =>
      expect(produto.firstChild).toHaveAttribute("data-testid", "product-link")
    );
  });
});
