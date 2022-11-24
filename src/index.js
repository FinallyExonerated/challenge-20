import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Aboutme from './components/Aboutme/AboutMe';
import SocialFollow from './components/SocialFollow/SocialFollow';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Projects';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
    <Aboutme />
    <SocialFollow />
    {/* <Navbar /> */}
    <Project />
  </React.StrictMode>,
  document.getElementById('root')
);

