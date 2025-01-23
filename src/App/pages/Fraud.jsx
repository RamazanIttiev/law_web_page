import React from 'react';
import { Helmet } from 'react-helmet';
import Promo from '../components/Fraud/Promo';
import Examples from '../components/Carousel';
import { fraudCases, fraudExamples } from '../data/fraudCases';
import Companies from '../components/Main/Companies';
import Description from '../components/Fraud/Description';
import Services from '../components/Fraud/Services';
import Situations from '../components/Fraud/Situations';
import Cases from '../components/Cases';
import Form from '../components/Form';

const Fraud = () => (
  <>
    <Promo />
    <Description />
    <Services />
    <Cases data={fraudCases} />
    <Situations />
    <Companies />
    <Examples examples={fraudExamples} />
    <Form title="Оставьте заявку и получите консультацию нашего юриста" />
    <Helmet>
      <meta name="description" content="Дела о мошенничестве" />
      <title>Дела о мошенничестве | Центр Юридической помощи «Согласие»</title>
    </Helmet>
  </>
);

export default Fraud;
