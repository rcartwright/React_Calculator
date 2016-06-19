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
  onKeyPress: function (e) {
    switch(e.target.value) {
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
          this.onCalculate();
          break;
      default:
          this.addToArgument(e);
    }
  },
  addToArgument: function (e) {
    console.log("addToArgument")
    if (this.state.currentState == 0) {
      this.setState({
        currentState: e.target.value.toString()
      })
    }
    else {
      this.setState({
        currentState: this.state.currentState + e.target.value.toString()
      })
    }
  },
  onThisReset: function () {
    this.setState({
      currentState: 0
    })
  },
  deleteOne: function () {

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
         <span className="each-button" value={number} onClick={this.onKeyPress}>{number}</span>
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