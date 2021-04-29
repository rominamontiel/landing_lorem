import React from 'react';
import './index.scss';
import BoxInfo from '../BoxInfo';

export default function description() {
  const firstBox = {
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  };
  const secondBox = {
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  };
  const thirdBox = {
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  };
  return (
    <section className="description" id="description">
      <div className="text-content">
        <h2>¿Qué es kwiz?</h2>
        <div className="line" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliquad exercitation ullamco laboris nisi.
        </p>
      </div>
      <div className="boxes-info">
        <BoxInfo title={firstBox.title} description={firstBox.description} />
        <BoxInfo title={secondBox.title} description={secondBox.description} />
        <BoxInfo title={thirdBox.title} description={thirdBox.description} />
      </div>
    </section>
  );
}
