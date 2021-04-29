import React from 'react';
import './index.scss';
import BoxInfo from '../BoxInfo';

export default function description() {
  return (
    <section className="description">
      <div className="text-content">
        <h2>¿Qué es kwiz?</h2>
        <div className="line" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliquad exercitation ullamco laboris nisi.
        </p>
      </div>
      <div className="boxes-info">
        <BoxInfo />
        <BoxInfo />
        <BoxInfo />
      </div>
    </section>
  );
}
