import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarrinhoItem from "../components/CarrinhoItem";
import { removeFromCarrinho } from "../features/carrinho/carrinhoSlice";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));
jest.mock("../features/carrinho/carrinhoSlice", () => ({
  removeFromCarrinho: jest.fn(),
}));

describe("funcionalidades dos itens do carrinho", () => {
  //
  let container;
  const mockProduct = { id: "001", amount: 2 };

  beforeEach(() => {
    container = render(<CarrinhoItem carrinhoItemInfo={mockProduct} />);
  });

  it("produto tem o nome correto", () => {
    expect(container.getByText(/TV/)).toBeInTheDocument();
  });

  it("produto exibe a quantidade", () => {
    expect(container.getByLabelText(/quantidade de itens/)).toHaveTextContent(
      "2"
    );
  });

  it("produto tem botão de remover do carrinho", () => {
    expect(container.getByRole("button")).toHaveTextContent("Remover");
  });

  it("botão de remover chamar função de remoção do redux", () => {
    fireEvent.click(container.getByText("Remover"));
    expect(removeFromCarrinho).toHaveBeenCalledTimes(1);
  });
});
