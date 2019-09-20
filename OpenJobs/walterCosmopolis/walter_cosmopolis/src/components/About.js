import React from 'react';

export default function About() {
  return (
    <main>
      <h2 className="about__title">Walter Cosmopolis is world-famous for good reason!</h2>
      <section className="about">
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary">Walter Fights for Truth and Justice</h3>
            <p className="paragraph">In his youth, Walter saw injustice in the world. Realizing that he was the one he was waiting for, young Walter put on his boots and went on a Mission.</p>

            <h3 className="heading-tertiary">Walter Gives Voice to the Voiceless</h3>
            <p className="paragraph">Walter has spent countless hours spreading the word that every person is a star.</p>

            <a href="#" className="btn-text">Learn More &rarr;</a>
          </div>
        </div>
      </section>
    </main>
  )
}