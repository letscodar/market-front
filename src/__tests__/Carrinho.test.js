import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carrinho from "../pages/Carrinho";
import { useSelector } from "react-redux";

jest.mock("../components/CarrinhoItem", () => {
  return {
    __esModule: true,
    default: () => <li></li>,
  };
});

jest.mock("react-redux", () => ({ useSelector: jest.fn() }));

describe("funcionalidades com carrinho cheio", () => {
  //
  let container;
  const mockProducts = [
    { id: "001", name: "tv" },
    { id: "002", name: "som" },
  ];

  beforeEach(() => {
    useSelector.mockImplementation(() => mockProducts);
    container = render(<Carrinho />);
  });

  it("carrinho tem título", () => {
    expect(container.getByRole("heading")).toHaveTextContent("Carrinho");
  });

  it("renderiza lista de produtos", () => {
    expect(container.getByRole("list")).toBeInTheDocument();
  });

  it("produtos são renderizados", () => {
    expect(container.queryAllByRole("listitem")).toHaveLength(
      mockProducts.length
    );
  });
});
