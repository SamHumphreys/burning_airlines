var app = app || {};

app.FlightView = Backbone.View.extend ({

  tagName: 'tr',

  render: function () {
    var date = this.model.get('date');
    var id = this.model.get('id');
    var origin = this.model.get('origin');
    var destination = this.model.get('destination');
    var planeID = this.model.get('aeroplane_id');
    var plane = app.aeroplanes.get(planeID).attributes;
    var planeName = plane.name;
    var totalSeats = plane.rows * plane.columns;
    this.$el.html('<td>' + date + '</td><td>' + id + '</td><td>' + origin + '/' + destination + '</td><td>' + planeName + '</td><td>' + totalSeats + '</td>');

    this.$el.appendTo('#flightsContentTable');
  }
});
