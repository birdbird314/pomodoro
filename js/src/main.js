(function() {
  let initialTime = new Time(1, 20);
  let timer = document.getElementById('timer-screen');
  let countdown = new CountDown(initialTime, timer);
  let playPauseButton = document.getElementById('play-pause-btn');
  let stopButton = document.getElementById('stop-btn');
  let cogButton = document.getElementById('cog-btn');
  let dropdown = document.getElementById('settings-dropdown')
  let minutesTextField = document.getElementById('mins-txt');
  let secondsTextField = document.getElementById('secs-txt');

  [minutesTextField, secondsTextField].forEach(field => field.disabled = true);

  playPauseButton.onclick = listeners.playPauseButtonListener(playPauseButton, countdown);
  stopButton.onclick = listeners.stopButtonListener(playPauseButton, countdown);
  cogButton.onclick = listeners.cogButtonListener(dropdown, [minutesTextField, secondsTextField]);
  minutesTextField.onchange = listeners.minutesTextFieldListener(minutesTextField, countdown);
  secondsTextField.onchange = listeners.secondsTextFieldListener(secondsTextField, countdown);

  initialTime.printTo(timer);
})();
