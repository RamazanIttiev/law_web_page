import React from 'react';
import Advantages from './components/Advantages';
import Competence from './components/Competence';
import Consultation from './components/Consultation';
import Guaranties from './components/Guaranties';
import Header from './components/Header';
import Promo from './components/Promo';
import Services from './components/Services';
import Spheres from './components/Spheres';
import Statistics from './components/Statistics';

const App = () => (
  <>
    <Header />
    <Promo />
    <Guaranties />
    <Competence />
    <Spheres />
    <Statistics />
    <Advantages />
    <Consultation />
    <Services />
  </>
);

export default App;
