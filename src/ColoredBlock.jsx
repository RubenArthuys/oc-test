import React, { Component } from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends Component {
  state = {  } 
  constructor(props) {
    super (props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      backgroundColor : "red"
    };
  }
  changeColor() {
    this.setState((prevState) => {
      let newColour = prevState.backgroundColor === "red" ? "blue" : "red";
      return {
        backgroundColor: newColour
      };
    });
  }
  render() { 
    return (  
      <div style={{width: "200px", height: "200px", backgroundColor: this.state.backgroundColor}}>
        <ChangeColorButton onClick={this.changeColor} />
      </div>
    );
  }
}
 
export default ColoredBlock;