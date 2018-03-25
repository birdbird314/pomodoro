function CountDown(time, timerElement) {
  var time = time;
  var timerElement = timerElement;

  var interrupted;
  var timeout;

  this.start = function() {
    interrupted = false;
    countDown(time);
  };

  this.stop = function() {
    interrupted = true;
    window.clearTimeout(timeout);
  }

  function countDown(time) {
    time.printTo(timer);
    if (time.isNonZero() && !interrupted) {
      timeout = window.setTimeout(
        () => countDown(time.minusOneSecond()),
        1000
      );
    }
  }
}
