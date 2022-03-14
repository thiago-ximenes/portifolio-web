import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Portifolio from '../pages/Portifolio';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


const Routes:React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" element={ <Home /> } />
        <Route path="/portifolio" element={ <Portifolio /> } />
      </Switch>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Routes