import React from 'react';
import './index.scss';

export default function InfoWork() {
  return (
    <section className="info-work" id="info-work">
      <div className="left-box">
        <img alt="" src="/img/work.svg" />
      </div>
      <div className="right-box">
        <h3>Cómo funciona</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul>
          <li>Dolore magna aliqua</li>
          <li>Consectetur adipiscing elit</li>
          <li>ed do eiusmod tempor</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
    </section>
  );
}
