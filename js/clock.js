function Clock() {
  this.alarmTime = "";
  this.alarmOn = false;
  this.alarmActive = false;
}

Clock.prototype.compareTimes = function() {
  if (moment().format("hh:mm") === this.alarmTime) {
    this.alarmActive = true;
  }
}

Clock.prototype.turnOnAlarm = function(alarm) {
  this.alarmTime = alarm;
  this.alarmOn = true;
  setInterval(this.compareTimes, 10000);
  }

exports.clockModule = Clock;
