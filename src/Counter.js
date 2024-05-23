import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('Manual error');
    }
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.handleClick.bind(this)}>Increment</button>
      </div>
    );
  }
}
