import React from 'react';

class Test extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      count: 0,
    };
  }

  increaseCount = () => {
    window.localStorage.setItem(
      'state',
      JSON.stringify({ count: this.state.count + 1 })
    );
    this.setState({ count: this.state.count + 1 });
  };
  decreaseCount = () => {
    window.localStorage.setItem(
      'state',
      JSON.stringify({ count: this.state.count - 1 })
    );
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className='App'>
        <h1> Count {this.state.count} </h1>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    );
  }
}

export default Test;
