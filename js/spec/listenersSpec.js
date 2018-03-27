describe('listeners', function() {
  describe('play pause button listener', function() {
    var countdown;
    var button;

    beforeEach(function() {
      countdown = jasmine.createSpyObj('countdown', ['start', 'pause', 'isInProgress']);
      button = { className : 'fa fa-play-circle-o' };
    });

    it('should start countdown on click', function() {
      countdown.isInProgress = () => false;

      listeners.playPauseButtonListener(button, countdown)();

      expect(countdown.start).toHaveBeenCalled();
    });

    it('should change button icon to pause when countdown is not in progress', function() {
      countdown.isInProgress = () => false;

      listeners.playPauseButtonListener(button, countdown)();

      expect(button.className).toEqual('fa fa-pause-circle-o');
    });

    it('should pause countdown if it was previously started', function() {
      countdown.isInProgress = () => true;

      var listener = listeners.playPauseButtonListener(button, countdown)();

      expect(countdown.pause).toHaveBeenCalled();
    });

    it('should change button icon to play when countdown is not in progress', function() {
      countdown.isInProgress = () => true;
      button.className = 'fa fa-pause-circle-o';

      listeners.playPauseButtonListener(button, countdown)();

      expect(button.className).toEqual('fa fa-play-circle-o');
    });
  });

  describe('stop button listener', function() {
    var countdown;
    var playPauseButton;
    var timerElement;

    beforeEach(function() {
      countdown = jasmine.createSpyObj('countdown', ['stop']);
      playPauseButton = { className : 'fa fa-pause-circle-o' };
      timerElement = {};
    });

    it('should stop countdown on click', function() {
      listeners.stopButtonListener(playPauseButton, countdown)();

      expect(countdown.stop).toHaveBeenCalled();
    });

    it('should change start button icon to start', function() {
      listeners.stopButtonListener(playPauseButton, countdown)();

      expect(playPauseButton.className).toEqual('fa fa-play-circle-o');
    });
  });

  describe('cog button on click listener', function() {
    var dropdown;

    beforeEach(function() {
      dropdown = { style : {} };
    });

    it('should show dropdown menu on click', function() {
      dropdown.style.display = 'none';

      listeners.cogButtonListener(dropdown)();

      expect(dropdown.style.display).toEqual('block');
    });

    it('should hide dropdown menu on click', function() {
      dropdown.style.display = 'block';

      listeners.cogButtonListener(dropdown)();

      expect(dropdown.style.display).toEqual('none');
    });
  });
});
