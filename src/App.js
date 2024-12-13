import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import GlobalStyles from './GlobalStyles';
import '../src/App.scss';
import Story from './pages/Story';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/story" element={<Story />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
