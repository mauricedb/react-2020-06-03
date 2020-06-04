import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(function (state) {
      return {
        count: state.count + 1,
      };
    });
    this.setState(function (state) {
      return {
        count: state.count + 1,
      };
    });
    this.setState(function (state) {
      return {
        count: state.count + 1,
      };
    });
  };

  // componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.increment}>Increment {count}</button>
      </div>
    );
  }
}

export default Counter;
