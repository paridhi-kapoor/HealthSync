import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Ensure you create and link this CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/loading">Loading</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
