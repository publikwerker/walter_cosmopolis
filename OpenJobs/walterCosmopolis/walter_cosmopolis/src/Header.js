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
      The world-famous entertainer, Walter Cosmopolis!
      </header>

    )
  }
}