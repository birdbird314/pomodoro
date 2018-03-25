(function() {
  var time = new Time(1, 20);
  var timer = document.getElementById('timer-screen');
  var countDown = new CountDown(time, timer);

  document.getElementById('play-pause-btn').onclick = function() {
    countDown.start();
  };

  document.getElementById('stop-btn').onclick = function() {
    resetTimer();
    countDown.stop();
  };

  function resetTimer() {
    timer.textContent = "00:00";
  }

  resetTimer();
})();
