import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarrinhoItem from "../pages/CarrinhoItem";
import { removeFromCarrinho } from "react-redux";

describe.skip("funcionalidades dos itens do carrinho", () => {
  //
  let container;
  const mockProduct = { name: "tv", amount: 1 };

  beforeEach(() => {
    container = render(<CarrinhoItem product={mockProduct} />);
  });

  it("produto tem o nome correto", () => {
    expect(container.getByRole("link")).toHaveTextContent("tv");
  });

  it("produto exibe a quantidade", () => {
    expect(container.getByRole("input")).toHaveValue(1);
  });

  it("produto tem botão de remover do carrinho", () => {
    expect(container.getByRole("button")).toHaveTextContent("Remover");
  });

  it("botão de remover chamar função de remoção do redux", () => {
    const removeFromCarrinho = jest.fn();
    fireEvent.click(container.getByRole("button"));
    expect(removeFromCarrinho).toHaveBeenCalledTimes(1);
  });
});
