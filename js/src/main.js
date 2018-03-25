(function() {
  var time = new Time(1, 20);
  var timer = document.getElementById('timer');
  var countDown = new CountDown(time, timer);

  countDown.start();
  window.setTimeout(() => countDown.stop(), 3000);
})();
