import React from 'react';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h2 className="about__title">Walter Cosmopolis is world-famous for good reason!</h2>
        <section className="about">
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
