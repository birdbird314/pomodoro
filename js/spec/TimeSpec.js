describe("Time", function() {
  var time;
  var element;

  beforeEach(function() {
    element = {};
  })

  describe("Given element", function() {
    it("should be filled minutes and seconds separated by :", function() {
      time = new Time(10, 25);

      time.printTo(element);

      expect(element.textContent).toEqual('10:25');
    });

    it("should be filled minutes and seconds with added padding zeros", function() {
      time = new Time(1, 2);

      time.printTo(element);

      expect(element.textContent).toEqual('01:02');
    });
  });

  describe("Given non zero time", function() {
    it("should return time substracted by one second", function() {
      time = new Time(1, 10);

      time.minusOneSecond().printTo(element);

      expect(element.textContent).toEqual('01:09');
    });

    it("should return time substracted by one second when secs = 0", function() {
      time = new Time(1, 0);

      time.minusOneSecond().printTo(element);

      expect(element.textContent).toEqual('00:59');
    });

    it("should return time with given minutes", function() {
      time = new Time(1, 0);

      time.withMins(2).printTo(element);

      expect(element.textContent).toEqual('02:00');
    })

    it("should return time with given seconds", function() {
      time = new Time(0, 1);

      time.withSecs(2).printTo(element);

      expect(element.textContent).toEqual('00:02');
    })
  });

  describe("Zero time recognition", function() {
    it("should recognize non-zero time", function() {
      time = new Time(1, 1);

      expect(time.isZero()).not.toBe(true);
      expect(time.isNonZero()).toBe(true);
    });

    it("should recognize zero time", function() {
      time = new Time(0, 0);

      expect(time.isZero()).toBe(true);
      expect(time.isNonZero()).not.toBe(true);
    });
  });
});
