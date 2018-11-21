import React from "react";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div className="App">
        Clicked {this.state.counter}
        <br />
        <button onClick={e => this.handleClick(e)}>Punch It Harder</button>
      </div>
    );
  }

  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
}
