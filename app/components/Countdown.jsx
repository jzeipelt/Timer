var React = require('react');
var Clock = require('Clock');

var Countdown = () => (
  <div>
    <h1 className="text-center page-title">Countdown</h1>
    <Clock totalSeconds={129}/>
  </div>
);

module.exports = Countdown;
