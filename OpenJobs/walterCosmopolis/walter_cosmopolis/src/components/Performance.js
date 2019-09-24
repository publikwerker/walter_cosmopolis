import React from 'react';

export default class Performance extends React.Component {

  render () {
    return (
      <section className="section-performance">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="./images/walter-talent-show.mov" type="video/mov">
            </source>
            Your Browser is not Supported!
          </video>
        </div>  
      </section>)
  }
}