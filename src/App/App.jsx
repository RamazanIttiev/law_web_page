import { Container } from '@mui/material';
import React from 'react';
import Guaranties from './components/Guaranties';
import Header from './components/Header';
import Promo from './components/Promo';

const App = () => (
  <>
    <Header />
    <Promo />
    <Container maxWidth="md">
      <Guaranties />
    </Container>
  </>
);

export default App;
