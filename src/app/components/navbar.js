"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Navbar top */}
      <nav className="navbar">
        <div className="title">fafa fufu studio</div>

        {/* Link horizontal (desktop) */}
        <div className="nav-links">
          <a href="/#home">Home</a>
          <Link href="/game">Game</Link>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Sidebar (mobile) */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/#home" onClick={handleClose}>Home</a></li>
          <li><Link href="/game" onClick={handleClose}>Game</Link></li>
          <li><a href="/#about" onClick={handleClose}>About</a></li>
          <li><a href="/#contact" onClick={handleClose}>Contact</a></li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
