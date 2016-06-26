"use strict";
var React = require('react');
var render = require('react-dom').render;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Calculator />
      </div>
    )
  }
})

var Calculator = React.createClass({
  getInitialState: function() {
    return {
      currentState: 0,
    };
  },
  onKeyPress: function (value) {
    switch(value) {
      case "CE":
          this.onThisReset();
          break;
      case "C":
          this.onThisReset();
          break;
      case "DE":
          this.deleteOne();
          break;
      case "=":
          this.onCalculate(value);
          break;
      default:
          this.addToArgument(value);
    }
  },
  addToArgument: function (value) {
    if (this.state.currentState == 0) {
      this.setState({
        currentState: value.toString()
      })
    }
    else {
      this.setState({
        currentState: this.state.currentState + value.toString()
      })
    }
  },
  onThisReset: function () {
    this.setState({
      currentState: 0
    })
  },
  deleteOne: function () {
    this.setState({
      currentState: this.state.currentState.substr(0, this.state.currentState.length-1)
    })
  },
  onCalculate: function () {
    this.setState({
      currentState: eval(this.state.currentState)
    })
  },
  showButtons: function () {
    var values = ["CE", "C", "DE", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", ":)", 0, ".", "="];
    var buttons = values.map(function(value, i) {
      return (
         <span className="each-button" key={i} onClick={this.onKeyPress.bind(this, value)}>{value}</span>
      );
    }, this);
    return (
      <div className="number-buttons">
        {buttons}
      </div>
    );
},
  render: function() {
    return (
      <div className="calculator">
        <div className="show-results">
          <p>
            {this.state.currentState}
          </p>
        </div>
        <div className="buttons">
          {this.showButtons()}
        </div>
      </div>
    );
  }
});


render((<App />), document.getElementById("app"));