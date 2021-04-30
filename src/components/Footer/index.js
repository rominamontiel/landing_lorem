import React from 'react';
import './index.scss';

export default function footer() {
  return (
    <footer>
      <div className="box-brand">
        <img alt="" src="/img/kwiz.svg" />
        <span>&copy;2021 kwiz</span>
      </div>
      <div className="nav">
        <ul>
          <li><a href="#description">Qué es</a></li>
          <li><a href="#info-work">Cómo funciona</a></li>
          <li><a href="#form">Contacto</a></li>
        </ul>
        <img alt="" src="/img/utopias.svg" />
      </div>
    </footer>
  );
}
