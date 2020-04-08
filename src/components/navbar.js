import React from 'react'

const Navbar = () => {
  return (
    <div id="navbar">
      <nav role="navigation">
        <ul className="menu" id="navlist">
          <a href="/home">
            <li>play game</li>
          </a>
          <span></span>
          <a href="/about">
            <li>FAQ</li>
          </a>
          <span></span>
          <a href="/thedeveloper">
            <li>the developer</li>
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
