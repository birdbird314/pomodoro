(function() {
  var time = new Time(1, 20);
  var timer = document.getElementById('timer-screen');
  var countdown = new CountDown(time, timer);
  var playPauseButton = document.getElementById('play-pause-btn');
  var stopButton = document.getElementById('stop-btn');

  playPauseButton.onclick = listeners.playPauseButtonListener(playPauseButton, countdown);
  stopButton.onclick = listeners.stopButtonListener(playPauseButton, timer, countdown);
})();
