import React from 'react';

const Navbar = () => {
  return (
    <div id="navbar">
      <nav role="navigation">
        <ul className="menu" id="navlist">
          <a href="/">
            <li>PLAY.</li>
          </a>
          <span></span>
          <a href="/about">
            <li>FAQ.</li>
          </a>
          <span></span>
          <a href="/thedeveloper">
            <li>MEET ME.</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
