"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" },
  { label: "Work", href: "#work" }, { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Portfolio home">
          <span className="brand-mark" aria-hidden="true">P</span><span>Portfolio</span>
          <span className="brand-dot" aria-hidden="true" />
        </a>
        <div className="nav-links" aria-label="Main menu">
          {links.map((link, index) => <a href={link.href} key={link.href}><span aria-hidden="true">0{index + 1}</span>{link.label}</a>)}
        </div>
        <a className="contact-link" href="#contact">Let&apos;s talk
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" /></svg>
        </a>
        <button className="menu-button" type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`} id="mobile-navigation" aria-hidden={!isOpen}>
        {links.map((link, index) => <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}><span>0{index + 1}</span>{link.label}</a>)}
        <a className="mobile-contact" href="#contact" onClick={() => setIsOpen(false)}>Let&apos;s work together</a>
      </div>
    </header>
  );
}
