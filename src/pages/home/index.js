import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Description from '../../components/Description';

export default function Home() {
  return (
    <section className="page-home">
      <Header />
      <Banner />
      <Description />
    </section>
  );
}
