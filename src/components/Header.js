import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Header() {
  //
  const carrinho = useSelector((state) => state.carrinho.value);

  return (
    <nav id="header">
      <Link to="/" className="logo">
        <strong>Let's Market</strong>
      </Link>
      <ul aria-label="opções de login">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastre-se</Link>
        </li>
      </ul>
      <Link to="/carrinho">Carrinho: {carrinho.length}</Link>
    </nav>
  );
}
