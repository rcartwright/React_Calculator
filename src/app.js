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
      currentState: this.state.currentState.substr(0, this.state.currentState.length-1);
    })
  },
  onCalculate: function () {
    this.setState({
      currentState: eval(this.state.currentState)
    })
  },
  showNumbers: function () {
    var numbersArray = ["CE", "C", "DE", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+"];
    var numberButtons = numbersArray.map(function(number) {
      return (
         <span className="each-button" onClick={this.onKeyPress.bind(this, number)}>{number}</span>
      );
    }, this);
    return (
      <div className="number-buttons">
        {numberButtons}
      </div>
    );
},
  render: function() {
    return (
      <div className="calculator">
        <div className="show-results">
          {this.state.currentState}
        </div>
        <div className="buttons">
          {this.showNumbers()}
          <div className="equal">
            <span className="each-button" onClick={this.onCalculate}>&#61;</span>
          </div>
        </div>
      </div>
    );
  }
});


render((<App />), document.getElementById("app"));