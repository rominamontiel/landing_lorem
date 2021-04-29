import React from 'react';
import './index.scss';

export default function boxInfo(props) {
  return (
    <section className="box-info">
      <h3>{props.title}</h3>
      <p>
        {props.description}
      </p>
    </section>
  );
}
