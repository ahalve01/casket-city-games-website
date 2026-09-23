import { useEffect, useRef, useState } from "react";
import logo from "../assets/casket-city-logo.png";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 800px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header
      className="navbar"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <a href="#" className="brand" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Casket City Games" />
      </a>

      <button
        ref={toggleRef}
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
          <path d={isOpen ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
        </svg>
      </button>

      <nav
        id="primary-navigation"
        aria-label="Main navigation"
        className={isOpen ? "is-open" : undefined}
        onClick={() => setIsOpen(false)}
      >
        <a href="#events">Events</a>
        <a href="#shop">Shop</a>
        <a href="#trade">Sell &amp; Trade</a>
        <a href="#visit">Visit</a>
      </nav>
    </header>
  );
}
