function Time(mins, secs) {
  var mins = mins;
  var secs = secs;

  this.printTo = function(element) {
    element.textContent = `${addPaddingZero(mins)}:${addPaddingZero(secs)}`;
  };

  this.minusOneSecond = function() {
    return secs > 0
      ? new Time(mins, secs - 1)
      : new Time(mins - 1, 59);
  };

  this.withMins = function(mins) {
    return new Time(mins, secs);
  }

  this.withSecs = function(secs) {
    return new Time(mins, secs);
  }

  this.isZero = function() {
    return mins == 0 && secs == 0;
  };

  this.isNonZero = function() {
    return !this.isZero();
  };

  function addPaddingZero(num) {
    return num < 10 ? `0${num}` : num;
  };
}
