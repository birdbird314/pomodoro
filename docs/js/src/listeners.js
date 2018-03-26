var listeners = (function() {
  var listeners = {};

  var paused = false;
  listeners.playPauseButtonListener = (playPauseButton, countdown) => function() {
      if (countdown.isInProgress()) {
        showPlay(playPauseButton);
        countdown.pause();
      } else {
        showPause(playPauseButton);
        countdown.start();
      }
  };

  listeners.stopButtonListener = (playPauseButton, timerElement, countdown) => function() {
    showPlay(playPauseButton)
    timerElement.textContent = '00:00';
    countdown.stop();
  };

  function showPlay(playPauseButton) {
    playPauseButton.className = playPauseButton.className.replace(/fa-.*-circle-o/, 'fa-play-circle-o');
  }

  function showPause(playPauseButton) {
    playPauseButton.className = playPauseButton.className.replace(/fa-.*-circle-o/, 'fa-pause-circle-o');
  }

  return listeners;
})();
