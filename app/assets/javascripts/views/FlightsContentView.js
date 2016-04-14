var app = app || {};

app.FlightsContentView = Backbone.View.extend({
  render: function (){
    this.collection.each(function (flight) {
      var flightView = new app.FlightView({model: flight});
      flightView.render();
    });
  }
});
