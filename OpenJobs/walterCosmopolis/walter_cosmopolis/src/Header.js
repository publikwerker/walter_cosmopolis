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
      <div className="header__logo-box">
        <img className="header__logo" src="src/images/logo.png" 
        alt="walter's star logo" />
      </div>

      <div className="header__text-box"> 
        <h1 className="header__title">
          <span className="header__title-left">The world-famous entertainer, </span>
          <span className="header__title-right">Walter Cosmopolis!</span>
        </h1>
      </div>
      </header>

    )
  }
}