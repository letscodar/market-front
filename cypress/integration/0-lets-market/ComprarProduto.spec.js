/// <reference types="cypress" />

describe("let's market app", () => {
  //
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("tem uma lista de produtos com 4 itens", () => {
    cy.get("[data-testid=lista-produtos]").should("exist");
    cy.get("[data-testid=produto]").should("have.length", 4);
  });

  it("clicar no produto leva para a página do produto", () => {
    cy.contains(/TV Samsung/).click();
    cy.url().should("include", "/tv-samsung");
  });

  it("botão de adicionar no carrinho funciona", () => {
    cy.get("[data-testid='add-to-cart-button']").click();
    cy.contains(/Carrinho: 1/);
  });

  it("botão do carrinho direciona para o carrinho", () => {
    cy.contains(/Carrinho/).click();
    cy.url().should("include", "/carrinho");
  });

  it("botão de remover do carrinho funciona corretamente", () => {
    cy.get("button").contains("Remover").first().click();
    cy.contains(/Carrinho: 0/);
  });
});
