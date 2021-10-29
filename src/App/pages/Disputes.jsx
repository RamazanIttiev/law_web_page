import React from 'react';
import { Helmet } from 'react-helmet';
import Cases from '../components/Disputes/Cases';
import Description from '../components/Disputes/Description';
import Promo from '../components/Disputes/Promo';
import Examples from '../components/Carousel';
import { disputeExamples } from '../data/disputeCases';

const Disputes = () => (
  <>
    <Promo />
    <Description />
    <Cases />
    <Examples examples={disputeExamples} />
    <Helmet>
      <meta name="description" content="Жилищные споры" />
      <title>Жилищные споры | БАСТИОН</title>
    </Helmet>
  </>
);

export default Disputes;
