import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Software from './components/Software';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Software />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
