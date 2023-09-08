import { Component } from "react";

class CounterCCV1 extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    // Way 1 to achieve
    //this.setState({ counter: this.state.counter + 1 });

    // Way 2
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  };

  onDecrement = () => {
    // Way 1 to achieve
    //this.setState({ counter: this.state.counter - 1 });

    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <input type="text" placeholder="Enter something here" />
        <div>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default CounterCCV1;
