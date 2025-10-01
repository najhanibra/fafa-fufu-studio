"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Fafa-Fufu Studio</div>

      {/* Tombol Hamburger */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/#home">Home</a></li>
        <li><Link href="/game">Game</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
