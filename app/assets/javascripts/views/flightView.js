var app = app || {};

app.FlightView = Backbone.View.extend ({

  el: "#FlightViewDiv",

  events: {
    'click #flightSave': 'createFlight',
    'click #flightCancel': 'cancelFlight'
  },

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
      flightDeets.appendTo('#flightsContentTable');
    });

    var airports = ["","BNE", "CBR", "DWN", "MCY", "MLB", "NCL", "PTH", "SYD", "TVL"];

    var $flightStart = $('#flightStart');
    airports.forEach(function(airport) {
      var $option = $('<option/>').text(airport).val(airport);
      $flightStart.append($option);
    });

    var $flightEnd = $('#flightEnd');
    airports.forEach(function(airport) {
      var $option = $('<option/>').text(airport).val(airport);
      $flightEnd.append($option);
    });

    var planes = [];
    for (var i = 0; i < app.aeroplanes.models.length; i++) {
      var id = app.aeroplanes.models[i].attributes.id;
      var name = app.aeroplanes.get(id).attributes.name;
      planes.push([id, name])
    };

    var $flightPlane = $('#flightPlane');
    planes.forEach(function(plane) {
      var $option = $('<option/>').text(plane[1]).attr({value: plane[0]});
      $flightPlane.append($option);
    });
  },
  createFlight: function () {
    var flight = new app.Flight();
    
    var date = this.$el.find('#flightDate').val();
    var origin = this.$el.find('#flightStart').val();
    var dest = this.$el.find('#flightEnd').val();
    var plane_id = Number(this.$el.find('#flightPlane').val());

    flight.set({
      aeroplane_id: plane_id,
      origin : origin,
      destination : dest,
      date : date
    });
    flight.save();
    app.flights.add(flight);
  },
  cancelFlight: function () {
    console.log('cancel flight clicked');
  },

});
