import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e){
    console.log(`something was clicked`);
  }

  handleSubmit(e){
    console.log(`something was submitted`);
    e.preventDefault();
  }

  render () {
    return (
      <header className="header">
      <div class="header--text-box"> 
        <hi class="header--title">
          <span class="header--title-left">The world-famous entertainer, </span>
          <span class="header--title-right"> Walter Cosmopolis!</span>
        </hi>
      </div>
      </header>

    )
  }
}