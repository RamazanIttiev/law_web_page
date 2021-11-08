import React from 'react';
import { Helmet } from 'react-helmet';
import Description from '../components/Disputes/Description';
import Promo from '../components/Disputes/Promo';
import { disputeCases } from '../data/disputeCases';
import Cases from '../components/Cases';
import Form from '../components/Form';

const Disputes = () => (
  <>
    <Promo />
    <Description />
    <Cases data={disputeCases} />
    <Form title="Оставьте заявку и получите консультацию нашего юриста" />
    <Helmet>
      <meta name="description" content="Жилищные вопросы" />
      <title>Жилищные вопросы | БАСТИОН</title>
    </Helmet>
  </>
);

export default Disputes;
