import React from 'react';
import './index.scss';

export default function banner() {
  return (
    <section className="banner">
      <img className="banner-background" alt="" src="/img/rectangle.svg" />
      <img className="left-graph" alt="" src="/img/primer_vista_1.svg" />
      <img className="right-graph" alt="" src="/img/primer_vista_2.svg" />
      <div className="text-container">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a className="btn-go" href="/url">QUIERO HACER MI ENCUESTA</a>
      </div>
    </section>
  );
}
