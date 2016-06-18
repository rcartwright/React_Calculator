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

  render: function() {
    return (
      <div className="calculator">
        <div className="show-results">
          {this.state.currentState}
        </div>
        <div className="buttons">

        <div>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        </div>

        <div>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        </div>

        <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        </div>

        </div>
      </div>
    )
  }
});


render((<App />), document.getElementById("app"));