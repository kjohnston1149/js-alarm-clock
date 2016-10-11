var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function() {

  var update = function() {
    $('#time').text(moment().format("hh:mm:ss a"));
  }
  setInterval(update, 1000);

  var newClock = new Clock();

  $('#alarm-clock').submit(function (){
    var alarm = $('#alarm-clock').val();
    clock.alarmTime = alarm;
  });

});
