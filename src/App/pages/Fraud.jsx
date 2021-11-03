import React from 'react';
import { Helmet } from 'react-helmet';
import Cases from '../components/Fraud/Cases';
import Promo from '../components/Fraud/Promo';
import Examples from '../components/Carousel';
import { fraudExamples } from '../data/fraudCases';
import Companies from '../components/Main/Companies';
import Description from '../components/Fraud/Description';
import Services from '../components/Fraud/Services';
import Situations from '../components/Fraud/Situations';

const Fraud = () => (
  <>
    <Promo />
    <Description />
    <Services />
    <Cases />
    <Companies />
    <Situations />
    <Examples examples={fraudExamples} />
    <Helmet>
      <meta name="description" content="Дела о мошенничестве" />
      <title>Дела о мошенничестве | БАСТИОН</title>
    </Helmet>
  </>
);

export default Fraud;
