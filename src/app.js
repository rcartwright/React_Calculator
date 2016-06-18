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
      currentState: 0
    };
  },
  clickNumber: function (number) {
    this.setState({
      currentState: this.state.currentState + number
    })
  },
  showNumbers: function () {
    var numbersArray = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    var numberButtons = numbersArray.map(function(number) {
      return (
         <span className="each-button" onClick={this.clickNumber.bind(this, number)}>{number}</span>
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
          <div className="operators">
            <span className="each-button">*</span>
            <span className="each-button">-</span>
            <span className="each-button">+</span>
          </div>
          <div className="equal">
            <span className="each-button">&#61;</span>
          </div>


        </div>
      </div>
    );
  }
});


render((<App />), document.getElementById("app"));