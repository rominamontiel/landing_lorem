import React from 'react';
import './index.scss';

export default function footer() {
  return (
    <footer>
      <div className="box-brand">
        <img alt="" src="/img/kwiz.svg" />
        <span>&copy;2021 - All rights reserved.</span>
      </div>
      <div className="dev">
        Desarrollado por
        <img className="grava" alt="" src="/img/grava.svg" />
        <img alt="" src="/img/utopias.svg" />
      </div>
    </footer>
  );
}
