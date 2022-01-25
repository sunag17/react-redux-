import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>
          Increment
        </button>
        <button onClick={this.decrement} >
          Decrement
        </button>
        <h2 >{this.props.count}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
