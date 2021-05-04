import React, { useState } from 'react';
import './index.scss';

export default function header() {
  const [menuMobile, setMenuMobile] = useState('');
  return (
    <header>
      <button
        className="menu-mobile"
        type="button"
        onClick={() => setMenuMobile('active')}
      >
        <img alt="" src="/img/menumobile.svg" />
      </button>
      <div className="brand-box">
        <a href="#top">
          <img alt="" src="/img/kwiz.svg" />
        </a>
      </div>
      <div className={`nav-box ${menuMobile}`}>
        <ul>
          <li><a href="#description" onClick={() => setMenuMobile('')}>Qué es</a></li>
          <li><a href="#info-work" onClick={() => setMenuMobile('')}>Cómo funciona</a></li>
          <li><a href="#form" onClick={() => setMenuMobile('')}>Contacto</a></li>
        </ul>
        <a className="btn-no-fill" href="/">Iniciar sesión</a>
      </div>
      <button
        type="button"
        className={`background-menu-mobile ${menuMobile}`}
        onClick={() => setMenuMobile('')}
      >
        <div />
      </button>
    </header>
  );
}
