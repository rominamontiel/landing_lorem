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
          <li><span>Qué es</span></li>
          <li><span>Cómo funciona</span></li>
          <li><span>Contacto</span></li>
        </ul>
        <a className="btn-no-fill" href="/">Iniciar sesión</a>
      </div>
    </header>
  );
}
