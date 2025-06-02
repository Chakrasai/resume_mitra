import 'remixicon/fonts/remixicon.css'; // Remix icon CSS
import React, { useState } from 'react';
import './Navbar.css';  // Make sure this file has correct styles

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-16 flex items-center justify-between px-4">
      <div className="navbar-left">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginRight: '10px',
          }}
        />
        <h1 className="brand-name">Resume Mitra</h1>
      </div>

      {/* Mobile menu icon */}
      <div
        className="navbar-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen);
        }}
      >
        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </div>

      {/* Right menu items */}
      <ul className={`navbar-right${menuOpen ? " open" : ""}`}>
        <li className="nav-item">
          <i className="ri-settings-3-fill"></i>
          <span>Settings</span>
        </li>
        <li className="nav-item">Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
