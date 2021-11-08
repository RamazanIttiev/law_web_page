import React from 'react';
import { Helmet } from 'react-helmet';
import AccordionInsurance from '../components/Insurance/AccordionInsurance';
import Description from '../components/Insurance/Description';
import Promo from '../components/Insurance/Promo';
import { insuranceSteps } from '../data/insuranceSteps';
import Companies from '../components/Insurance/Companies';
import InsuranceSteps from '../components/Insurance/InsuranceSteps';
import Form from '../components/Form';

const Insurance = () => (
  <>
    <Promo />
    <InsuranceSteps insuranceSteps={insuranceSteps} />
    <Description />
    <AccordionInsurance />
    <Companies />
    <Form title="Оставьте заявку и получите консультацию нашего юриста" />
    <Helmet>
      <meta name="description" content="Вопросы страхования" />
      <title>Вопросы страхования | БАСТИОН</title>
    </Helmet>
  </>
);

export default Insurance;
