import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Outreach from './components/Outreach';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Outreach />
      </main>
      <Footer />
    </div>
  );
}

export default App;
