import React from 'react';
import Cases from '../components/Disputes/Cases';
import Description from '../components/Disputes/Description';
import Promo from '../components/Disputes/Promo';
import Examples from '../components/Main/Carousel';
import { disputeExamples } from '../data/disputeCases';

const Disputes = () => (
  <>
    <Promo />
    <Description />
    <Cases />
    <Examples examples={disputeExamples} />
  </>
);

export default Disputes;
