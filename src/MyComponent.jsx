import React, { Component } from 'react';

class MyComponent extends Component {
  // state = {  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      foo: 'Click me'
    };
  }
  handleClick() {
    this.setState({
      foo: 'bar'
    })
    // console.log("click");
  }
  render() { 
    return (  
      <button onClick={this.handleClick}>
        {this.state.foo}
      </button>
    );
  }
}
 
export default MyComponent;