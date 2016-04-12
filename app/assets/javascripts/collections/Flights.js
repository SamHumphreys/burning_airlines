var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight,
  initialize: function() {
    this.on('add', function (flight) {
      var flightView = new app.FlightView({ model: Flight });
      flightView.render();
    });
  }
});
