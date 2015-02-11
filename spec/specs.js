describe("MovieTicket", function() {
  describe("matinee", function() {
    it("reduces the price of the ticket by 1", function() {
      var testMovieTicket = Object.create(MovieTicket);
      testMovieTicket.matinee();
      expect(testMovieTicket.price).to.equal(9);
    });
  });

  describe("seniorDiscount", function() {
    it("reduces the price of the ticket by 2", function() {
      var testMovieTicket = Object.create(MovieTicket);
      testMovieTicket.seniorDiscount();
      expect(testMovieTicket.price).to.equal(8);
    });
  });
});
