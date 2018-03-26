function CountDown(time, timerElement) {
  const initialTime = time;
  var currentTime = initialTime;
  var timerElement = timerElement;

  var timeout;
  var isInProgress;

  this.start = function() {
    isInProgress = true;
    countDown(currentTime);
  };

  this.pause = function() {
    isInProgress = false;
    window.clearTimeout(timeout);
  }

  this.stop = function() {
    isInProgress = false;
    window.clearTimeout(timeout);
    currentTime = initialTime;
  }

  this.isInProgress = function() {
    return isInProgress;
  }

  function countDown(time) {
    time.printTo(timerElement);
    currentTime = time;
    if (time.isNonZero()) {
      timeout = window.setTimeout(
        () => countDown(time.minusOneSecond()),
        1000
      );
    }
  }
}
