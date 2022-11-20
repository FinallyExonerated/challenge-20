import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Socials from './components/Socials';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
    <Aboutme />
    <Socials />
  </React.StrictMode>,
  document.getElementById('root')
);

