import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link className="navbar-marca" to="/home" onClick={closeMenu} aria-label="UPATECO, inicio">
        <span className="navbar-logo" aria-hidden="true">U</span>
        <span className="navbar-nombre">UPATECO</span>
      </Link>

      <button
        className="menu-hamburger"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={isOpen ? 'nav-panel abierto' : 'nav-panel'}>
        <ul className="nav-links">
          <li><NavLink to="/home" onClick={closeMenu}>Inicio</NavLink></li>
          <li><NavLink to="/acercade" onClick={closeMenu}>La universidad</NavLink></li>
          <li><NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink></li>
        </ul>
        <Link className="navbar-cta" to="/contacto" onClick={closeMenu}>Contactanos <span aria-hidden="true">→</span></Link>
      </div>
    </nav>
  );
}

export default Navbar;
