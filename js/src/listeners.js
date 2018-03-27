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
    const opacity = dropdown.style.opacity.toString();
    dropdown.style.opacity = "1" === opacity ? 0 : 1;
  };

  function showPlay(playPauseButton) {
    playPauseButton.className = playPauseButton.className.replace(/fa-.*-circle-o/, 'fa-play-circle-o');
  }

  function showPause(playPauseButton) {
    playPauseButton.className = playPauseButton.className.replace(/fa-.*-circle-o/, 'fa-pause-circle-o');
  }

  return listeners;
})();
