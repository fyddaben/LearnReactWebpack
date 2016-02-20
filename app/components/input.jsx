
import React from 'react';
class InputState extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {enable: false};
  }
  handleClick(event) {
    this.setState({enable: !this.state.enable});
  }
  render() {
    return (
      <p>
         <input type="text" disabled={this.state.enable} />
         <button onClick={this.handleClick}>Change State</button>
      </p>
    );
  }
};
module.exports = InputState;
