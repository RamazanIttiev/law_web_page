import React from 'react';
import { Helmet } from 'react-helmet';
import Cases from '../components/Fraud/Cases';
import Promo from '../components/Fraud/Promo';
import { fraudExamples } from '../data/fraudCases';
import Examples from '../components/Carousel';

const Fraud = () => (
  <>
    <Promo />
    <Cases />
    <Examples examples={fraudExamples} />
    <Helmet>
      <meta name="description" content="Дела о мошенничестве" />
      <title>Дела о мошенничестве | БАСТИОН</title>
    </Helmet>
  </>
);

export default Fraud;
