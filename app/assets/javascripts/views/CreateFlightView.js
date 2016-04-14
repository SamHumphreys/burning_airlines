var app = app || {};

app.CreateFlightView = Backbone.View.extend ({
  el: "#flightsCreate",
  events: {
    'click #flightSave': 'createFlight',
    'click #flightCancel': 'cancelFlight'
  },
  render: function () {
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

    app.aeroplanes.fetch().done(function () {
      var planes = [];

      for (var i = 0; i < app.aeroplanes.models.length; i++) {
        var id = app.aeroplanes.models[i].attributes.id;
        var name = app.aeroplanes.get(id).attributes.name;
        planes.push([id, name]);
      };
      var $flightPlane = $('#flightPlane');
      planes.forEach(function(plane) {
        var $option = $('<option/>').text(plane[1]).attr({value: plane[0]});
        $flightPlane.append($option);
      });
    });
  },
  createFlight: function () {
    console.log('save clicked');

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
  }
});
