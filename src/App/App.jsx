import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Disputes from './pages/Disputes';
import Header from './components/Header';
import Footer from './components/Footer';
import Fraud from './pages/Fraud';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/fraud">
        <Fraud />
      </Route>
      <Route path="/insurance">
        <Disputes />
      </Route>
      <Route path="/disputes">
        <Disputes />
      </Route>
    </Switch>
    <Footer />
  </>
);

export default App;
