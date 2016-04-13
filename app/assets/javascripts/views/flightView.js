var app = app || {};

app.FlightView = Backbone.View.extend ({
  tagName: 'tr',
  render: function () {
    var flight = this.model.attributes;
    var date = flight.date;
    var origin = flight.origin;
    var destination = flight.destination;
    var planeID = flight.aeroplane_id;
    var plane = app.aeroplanes.get(planeID).attributes;
    var planeName = plane.name;
    var totalSeats = plane.rows * plane.columns;
    this.$el.text('<td>' + date + '</td><td>' + planeID + '</td><td>' + origin + '/' + destination + '</td><td>' + planeName + '</td>');
    this.$el.appendTo('#flightsContentTable');
  }
});
