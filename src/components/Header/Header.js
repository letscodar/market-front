import React from "react";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
