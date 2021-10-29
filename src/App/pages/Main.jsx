import { useMediaQuery } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import AccordionServices from '../components/Main/Accordion';
import Advantages from '../components/Main/Advantages';
import Companies from '../components/Main/Companies';
import Competence from '../components/Main/Competence';
import Consultation from '../components/Main/Consultation';
import Guaranties from '../components/Main/Guaranties';
import Promo from '../components/Main/Promo';
import Services from '../components/Main/Services';
import Spheres from '../components/Main/Spheres';
import Statistics from '../components/Main/Statistics';

const Main = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Promo />
      <Guaranties />
      <Competence />
      <Spheres />
      <Statistics />
      <Advantages />
      <AccordionServices />
      <Consultation />
      {matches && <Services />}
      <Companies />
      <Helmet>
        <meta name="description" content="БАСТИОН" />
        <title>БАСТИОН</title>
      </Helmet>
    </>
  );
};

export default Main;
