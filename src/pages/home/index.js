import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Description from '../../components/Description';
import InfoWork from '../../components/InfoWork';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <section className="page-home">
      <Header />
      <Banner />
      <Description />
      <InfoWork />
      <Form />
      <Footer />
    </section>
  );
}
