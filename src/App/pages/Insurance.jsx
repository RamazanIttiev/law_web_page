import React from 'react';
import AccordionInsurance from '../components/Insurance/AccordionInsurance';
import Description from '../components/Insurance/Description';
import Promo from '../components/Insurance/Promo';
import Examples from '../components/Carousel';
import { insuranceExamples } from '../data/insuranceCases';

const Insurance = () => (
  <>
    <Promo />
    <Description />
    <AccordionInsurance />
    <Examples examples={insuranceExamples} />
  </>
);

export default Insurance;
