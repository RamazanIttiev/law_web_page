import React from 'react';
import { Helmet } from 'react-helmet';
import Description from '../components/Disputes/Description';
import Promo from '../components/Disputes/Promo';
import Examples from '../components/Carousel';
import { disputeCases, disputeExamples } from '../data/disputeCases';
import Cases from '../components/Cases';
import Form from '../components/Form';

const Disputes = () => (
  <>
    <Promo />
    <Description />
    <Cases data={disputeCases} />
    <Examples examples={disputeExamples} />
    <Form title="Оставяьте заявку и получите консультацию нашего юриста" />
    <Helmet>
      <meta name="description" content="Жилищные вопросы" />
      <title>Жилищные вопросы | БАСТИОН</title>
    </Helmet>
  </>
);

export default Disputes;
