"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`layout ${isOpen ? "shift" : ""}`}>
      {/* Navbar top */}
      <nav className="navbar">
        <div className="title">fafa fufu studio</div>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Sidebar kanan */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/#home">Home</a></li>
          <li><Link href="/game">Game</Link></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </aside>

      {/* Konten */}
      <main className="content">
        <h1>Welcome to Fafa-Fufu Studio</h1>
        <p>Kami adalah studio kreatif yang bergerak di bidang desain, teknologi, dan inovasi.</p>
      </main>
    </div>
  );
};

export default Navbar;
