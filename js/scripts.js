var MovieTicket = {
  price: 10,
  matinee: function() {
    this.price = this.price - 1;
  },
  seniorDiscount: function() {
    this.price = this.price - 2;
  }
};

$(document).ready(function() {

  $('form#new-ticket').submit(function(event) {
    event.preventDefault();

    var movieTitle = $('select#movie-name').val();
    var movieTime = parseInt($('select#movie-time').val());
    var viewersAge = parseInt($('input#age').val());

    var movieTicket = Object.create(MovieTicket);
    movieTicket.name = movieTitle;

    if(movieTime <= 12) {
      movieTicket.matinee();
    }

    if(viewersAge >= 50) {
      movieTicket.seniorDiscount();
    }


    $("#movie").text(movieTicket.name);
    $("#price").text("$" + movieTicket.price);
  });
});
