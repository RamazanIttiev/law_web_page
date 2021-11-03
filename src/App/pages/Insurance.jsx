import React from 'react';
import { Helmet } from 'react-helmet';
import AccordionInsurance from '../components/Insurance/AccordionInsurance';
import Description from '../components/Insurance/Description';
import Promo from '../components/Insurance/Promo';
// import Examples from '../components/Carousel';
// import { insuranceExamples } from '../data/insuranceCases';
import { insuranceSteps } from '../data/insuranceSteps';
import Companies from '../components/Insurance/Companies';
import InsuranceSteps from '../components/Insurance/InsuranceSteps';

const Insurance = () => (
  <>
    <Promo />
    <InsuranceSteps insuranceSteps={insuranceSteps} />
    <Description />
    <AccordionInsurance />
    {/* <Examples examples={insuranceExamples} /> */}
    <Companies />
    <Helmet>
      <meta name="description" content="Вопросы страхования" />
      <title>Вопросы страхования | БАСТИОН</title>
    </Helmet>
  </>
);

export default Insurance;
