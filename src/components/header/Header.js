import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="ami">
      <div className="container">
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Api</li>
            <li>Todo</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
