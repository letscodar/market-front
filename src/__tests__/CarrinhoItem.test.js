import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarrinhoItem from "../components/CarrinhoItem";
import { useDispatch } from "react-redux";

jest.mock("react-redux", () => ({ useDispatch: jest.fn() }));

describe("funcionalidades dos itens do carrinho", () => {
  //
  let container;
  const mockProduct = { id: "001", amount: 1 };

  beforeEach(() => {
    // useDispatch.mockImplementation(() => {});
    container = render(<CarrinhoItem carrinhoItemInfo={mockProduct} />);
  });

  it("produto tem o nome correto", () => {
    expect(container.getByText(/TV/)).toBeInTheDocument();
  });

  it.skip("produto exibe a quantidade", () => {
    expect(container.querySelector("span")).toHaveTextContent("1");
  });

  // it("produto tem botão de remover do carrinho", () => {
  //   expect(container.getByRole("button")).toHaveTextContent("Remover");
  // });

  // it.skip("botão de remover chamar função de remoção do redux", () => {
  //   fireEvent.click(container.getByRole("button"));
  //   expect(removeFromCarrinho).toHaveBeenCalledTimes(1);
  // });
});
