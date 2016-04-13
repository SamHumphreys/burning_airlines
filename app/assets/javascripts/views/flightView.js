var app = app || {};

app.FlightView = Backbone.View.extend ({
  tagName: 'li',
  render: function () {
    var flight = this.model.attributes;
    var date = flight.date;
    var origin = flight.origin;
    var destination = flight.destination;
    var planeID = flight.aeroplane_id;
    var plane = app.aeroplanes.get(planeID).attributes;
    var planeName = plane.name;
    var totalSeats = plane.rows * plane.columns;

  }

});
