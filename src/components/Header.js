// Header.js

import React from "react";
import { Link } from 'react-router-dom';
 import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div id='x1' className="header-container ui-fixed menu">
      <div className="ui container center">
        <h2 id='x2' style={{ textAlign: "center" }}>Contact Manager</h2>
        <Link to="/" className="btn btn-outline-danger">Logout</Link>
      </div>
    </div>
  );
};

export default Header;
