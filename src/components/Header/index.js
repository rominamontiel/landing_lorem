import React from 'react';
import './index.scss';

export default function header() {
  return (
    <header>
      <div>
        <img alt="" src="/img/kwiz.svg" />
      </div>
      <div>
        <ul>
          <li><a href="#description">Qué es</a></li>
          <li><a href="#info-work">Cómo funciona</a></li>
          <li><a href="#description">Contacto</a></li>
        </ul>
        <a className="btn-no-fill" href="/">Iniciar sesión</a>
      </div>
    </header>
  );
}
