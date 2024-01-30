import React, { useState, useEffect } from 'react';

function Test() {
  const [showMiniMenu, setShowMiniMenu] = useState(false);

  return (
    <div className="navbar">
      <div
        className="menu-item"
        onMouseEnter={() => setShowMiniMenu(true)}
        onMouseLeave={() => setShowMiniMenu(false)}
      >
        Home
      </div>
      <div className="menu-item">About</div>
      <div className="menu-item">Services</div>
      <div className="menu-item">Contact</div>

      {showMiniMenu && (
        <div className="mini-menu" onMouseEnter={() => setShowMiniMenu(true)} onMouseLeave={() => setShowMiniMenu(false)}>
          <div className="mini-item">Submenu 1</div>
          <div className="mini-item">Submenu 2</div>
        </div>
      )}
    </div>
  );
};

export default Test;
