import React from 'react';
import './index.scss';

export default function Form() {
  return (
    <section className="form-container">
      <div className="toScroll" id="form" />
      <div className="form-box">
        <h2>¡Completa para que te contacten!</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <form>
          <div className="left">
            <div className="field-box">
              <span>Nombre</span>
              <input type="text" name="" id="" />
            </div>
            <div className="field-box">
              <span>Empresa</span>
              <input type="text" name="" id="" />
            </div>
            <div className="field-box">
              <span>Mail</span>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="right">
            <div className="field-box">
              <span>Consulta</span>
              <textarea rows="15" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
