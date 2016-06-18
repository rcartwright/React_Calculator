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
      <div>
      {this.state.currentState}
      </div>
    )
  }
});


render((<App />), document.getElementById("app"));