function Clock() {
  this.alarmTime = "";
  this.alarmOn = false;
  this.alarmActive = false;
}

Clock.prototype.turnOnAlarm = function() {
  this.alarmOn = true;
  setInterval(this.compareTimes, 1000);
  }


Clock.prototype.compareTimes = function(time) {

  if (time === this.alarmTime) {
    this.alarmActive = true;
  }
}

exports.clockModule = Clock;
