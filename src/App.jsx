import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;