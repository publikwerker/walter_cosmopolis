import React from 'react';
import bgVideo from  "../images/walter-talent-show.mp4";

export default class Performance extends React.Component {

  render () {
    return (
      <section className="section-performance">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={bgVideo} type="video/mp4">
            </source>
            Your Browser is not Supported!
          </video>
        </div>  
        <h2 className=" heading-primary performance__title">Walter Cosmopolis is a man of many talents!</h2>
      </section>)
  }
}