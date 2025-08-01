import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }));
    this.sayHello();
  }

  decrement = () => {
    this.setState(prev => ({ counter: prev.counter - 1 }));
  }

  sayHello = () => {
    alert("hello Member1");
  }

  sayWelcome = (msg) => {
    alert(msg);
  }

  handleSynthetic = (e) => {
    e.preventDefault();
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <div style={{ marginBottom: '30px' }}>
          <button onClick={this.increment} style={{ display: 'block', marginBottom: '10px' }}>Increment</button>
          <button onClick={this.decrement} style={{ display: 'block', marginBottom: '10px' }}>Decrement</button>
          <button onClick={() => this.sayWelcome("welcome")} style={{ display: 'block', marginBottom: '10px' }}>Say welcome</button>
          <button onClick={this.handleSynthetic} style={{ display: 'block', marginBottom: '10px' }}>Click on me</button>
        </div>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
