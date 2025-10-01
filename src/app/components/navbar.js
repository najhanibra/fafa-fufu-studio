"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Fafa-Fufu Studio</div>
      <ul>
        <li><a href="/#home">Home</a></li>
        <li><Link href="/game">Game</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
