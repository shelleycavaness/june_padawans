import React from "react";

import { Link } from "react-router-dom";

const Header = (props) => {
  console.log("props header: ", props);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">S'enregistrer</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
