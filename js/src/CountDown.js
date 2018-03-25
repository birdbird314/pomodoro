function CountDown(time, timerElement) {
  var time = time;
  var timerElement = timerElement;

  var timeout;

  this.start = function() {
    countDown(time);
  };

  this.stop = function() {
    window.clearTimeout(timeout);
  }

  function countDown(time) {
    time.printTo(timerElement);
    if (time.isNonZero()) {
      timeout = window.setTimeout(
        () => countDown(time.minusOneSecond()),
        1000
      );
    }
  }
}
