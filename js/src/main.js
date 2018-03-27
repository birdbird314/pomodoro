(function() {
  var initialTime = new Time(1, 20);
  var timer = document.getElementById('timer-screen');
  var countdown = new CountDown(initialTime, timer);
  var playPauseButton = document.getElementById('play-pause-btn');
  var stopButton = document.getElementById('stop-btn');
  var cogButton = document.getElementById('cog-btn');
  var dropdown = document.getElementById('settings-dropdown')

  playPauseButton.onclick = listeners.playPauseButtonListener(playPauseButton, countdown);
  stopButton.onclick = listeners.stopButtonListener(playPauseButton, countdown);
  cogButton.onclick = listeners.cogButtonListener(dropdown);

  initialTime.printTo(timer);
})();
