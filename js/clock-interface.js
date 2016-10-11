var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function() {

  var update = function() {
    $('#time').text(moment().format("hh:mm:ss A"));
  }
  setInterval(update, 1000);

  var newClock = new Clock();

  var checkAlarm = function() {
    if (newClock.alarmActive = true) {
      alert("Brriiiing");
      console.log("The alarm is on");
    }
  }
  setInterval(checkAlarm, 1000);

  $('.form-group').submit(function(event){
    debugger;
    event.preventDefault();
    var alarm = $('#alarm-clock').val();
    console.log(alarm + "is the value from the form");
    newClock.turnOnAlarm(alarm);
    console.log(newClock.alarmTime + "is the property from the clock object");
    console.log(newClock.alarmTime + "is the property from the clock object");
  });



});
