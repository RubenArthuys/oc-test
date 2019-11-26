import React, { Component } from 'react';

class ChangeColorButton extends Component {
  state = {  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('click')
    this.props.onClick();
  }
  render() { 
    return ( 
      <button onClick={this.handleClick}>
        Change the colour
      </button>
    );
  }
}
 
export default ChangeColorButton;