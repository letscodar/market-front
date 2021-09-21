import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <nav id="header">
      <Link to="/" className="logo">
        Let's Market
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  );
}
