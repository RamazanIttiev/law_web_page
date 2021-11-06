import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Disputes from './pages/Disputes';
import Header from './components/Header';
import Footer from './components/Footer';
import Fraud from './pages/Fraud';
import Insurance from './pages/Insurance';
import Cases from './components/Insurance/Cases';
import Error from './pages/404';
import ScrollBar from './components/ScrollBar';

const App = () => {
  const [scrollPostion, setScrollPostion] = useState(0);

  const getDocHeight = () =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollBarPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setScrollPostion(scrollBarPostion);
  };

  const listenToScrollEvent = () => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  useEffect(() => {
    listenToScrollEvent();
  }, [scrollPostion]);

  return (
    <>
      <ScrollBar scroll={scrollPostion} />
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/fraud">
          <Fraud />
        </Route>
        <Route path="/insurance">
          <Insurance />
        </Route>
        <Route path="/disputes">
          <Disputes />
        </Route>
        <Route path="/insuranceCase/:id" component={Cases} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
