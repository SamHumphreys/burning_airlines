var app = app || {};

app.Aeroplanes = Backbone.Collection.extend({
  url: '/aeroplanes'
  //model this collection is based on
  model: app.Aeroplane,
  initialize: function() {
    this.on('add', function (flight) {
      var flightView = new app.FlightView({ model: Flight });
      flightView.render();
    });
  };
});
