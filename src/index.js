import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Elma extends Component {
  state = {
    count: 0,
    price: 100
  };
  onChange = e => {
    this.setState({
      count: e.target.value * this.state.price
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count === 0 ? false : true;
  }
  render() {
    return (
      <div className="App">
        <h1>Calculate apple amount</h1>
        <span>1 apple = {this.state.price} TL</span>
        <br />
        <input
          onChange={this.onChange}
          type="number"
          placeholder="please enter the count of apples"
        />
        <div>Amount you need to pay = {this.state.count} TL</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Elma />, rootElement);
