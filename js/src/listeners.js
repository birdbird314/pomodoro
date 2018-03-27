var listeners = (function() {
  var listeners = {};

  listeners.playPauseButtonListener = (playPauseButton, countdown) => function() {
      if (countdown.isInProgress()) {
        showPlay(playPauseButton);
        countdown.pause();
      } else {
        showPause(playPauseButton);
        countdown.start();
      }
  };

  listeners.stopButtonListener = (playPauseButton, countdown) => function() {
    showPlay(playPauseButton)
    countdown.stop();
  };

  listeners.cogButtonListener = (dropdown) => function() {
    const display = dropdown.style.display;
    dropdown.style.display = 'block' === display ? 'none' : 'block';
  };

  function showPlay(playPauseButton) {
    playPauseButton.className = playPauseButton.className.replace(/fa-.*-circle-o/, 'fa-play-circle-o');
  }

  function showPause(playPauseButton) {
    playPauseButton.className = playPauseButton.className.replace(/fa-.*-circle-o/, 'fa-pause-circle-o');
  }

  return listeners;
})();
