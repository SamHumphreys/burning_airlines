var app = app || {};

app.FlightView = Backbone.View.extend ({
  // tagName: 'tr',

  render: function () {
    this.collection.each(function(f) {
      var flight = f.attributes;
      var date = flight.date;
      var origin = flight.origin;
      var destination = flight.destination;
      var planeID = flight.aeroplane_id;
      var plane = app.aeroplanes.get(planeID).attributes;
      var planeName = plane.name;
      var totalSeats = plane.rows * plane.columns;
      var flightDeets = $('<tr/>').html('<td>' + date + '</td><td>' + planeID + '</td><td>' + origin + '/' + destination + '</td><td>' + planeName + '</td><td>' + totalSeats + '</td>');
      console.log("this far?");
      console.log(flightDeets);
      flightDeets.appendTo('#flightsContentTable');
    })
  }
});
