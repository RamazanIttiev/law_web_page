import React from 'react';
import { Helmet } from 'react-helmet';
import AccordionInsurance from '../components/Insurance/AccordionInsurance';
import Description from '../components/Insurance/Description';
import Promo from '../components/Insurance/Promo';
import Examples from '../components/Carousel';
import { insuranceExamples } from '../data/insuranceCases';
import Steps from '../components/Insurance/Steps';

const Insurance = () => (
  <>
    <Promo />
    <Description />
    <AccordionInsurance />
    <Examples examples={insuranceExamples} />
    <Steps />
    <Helmet>
      <meta name="description" content="Вопросы страхования" />
      <title>Вопросы страхования | БАСТИОН</title>
    </Helmet>
  </>
);

export default Insurance;
