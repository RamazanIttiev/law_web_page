import { useMediaQuery } from '@mui/material';
import React from 'react';
import AccordionServices from './components/Accordion';
import Advantages from './components/Advantages';
import Examples from './components/Carousel';
import Companies from './components/Companies';
import Competence from './components/Competence';
import Consultation from './components/Consultation';
import Contacts from './components/Contacts';
import Guaranties from './components/Guaranties';
import Header from './components/Header';
import Promo from './components/Promo';
import Services from './components/Services';
import Spheres from './components/Spheres';
import Statistics from './components/Statistics';

const App = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Header />
      <Promo />
      <Guaranties />
      <Competence />
      <Spheres />
      <Statistics />
      <Advantages />
      <AccordionServices />
      <Consultation />
      {matches && <Services />}
      <Examples />
      <Companies />
      <Contacts />
    </>
  );
};

export default App;
