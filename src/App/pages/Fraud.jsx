import React from 'react';
import Cases from '../components/Fraud/Cases';
import Promo from '../components/Fraud/Promo';
import { fraudExamples } from '../data/fraudCases';
import Examples from '../components/Main/Carousel';

const Fraud = () => (
  <>
    <Promo />
    <Cases />
    <Examples examples={fraudExamples} />
  </>
);

export default Fraud;
