function CountDown(initialTime, timerElement) {
  const STARTED = 'started';
  const PAUSED = 'paused';
  const STOPPED = 'stopped'

  let currentTime = initialTime;
  let state = STOPPED;

  let timeout;

  this.start = function() {
    state = STARTED;
    countDown(currentTime);
  };

  this.pause = function() {
    state = PAUSED;
    window.clearTimeout(timeout);
  }

  this.stop = function() {
    state = STOPPED;
    update()
    window.clearTimeout(timeout);
  }

  this.isInProgress = function() {
    return state == STARTED;
  }

  this.setMins = function(mins) {
    initialTime = initialTime.withMins(mins);
    updateIfStopped();
  }

  this.setSecs = function(secs) {
    initialTime = initialTime.withSecs(secs);
    updateIfStopped();
  }

  function updateIfStopped() {
    if(state == STOPPED) {
      update();
    }
  }

  function update() {
    currentTime = initialTime;
    initialTime.printTo(timerElement);
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
