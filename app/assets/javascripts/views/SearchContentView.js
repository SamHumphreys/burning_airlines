var app = app || {};

app.AeroplaneSearchView  = Backbone.View.extend({

  el: ".main",

  events: {
    'click #searchButton' : 'searchForFlights',
    'keypress textarea' : 'checkForEnterSearchFlights',
    'change #searchFrom' : 'loadDestinations'
  },

  initialize: function () {
    console.log("INIT app.AeroplaneSearchView ");
  },

  renderSearch : function () {
    var airports = [];
    this.collection.each(function(f) { airports.push(f.attributes.origin) });
    airports = _.uniq(airports);
    var $searchFrom = $('#searchFrom');
    //add blank entry to force user to choose (and thus fire the event 'change #searchFrom')
    var $option = $('<option/>').text(" ");
    $searchFrom.append($option);
    airports.forEach(function(airport) {
      var $option = $('<option/>').text(airport).val(airport);
      $searchFrom.append($option);
    });
  },

  loadDestinations: function() {
    var airports = [];
    varOrigin = $('#searchFrom').val();
    this.collection.each(function(f) {
      if (varOrigin === f.attributes.origin) {
        airports.push(f.attributes.destination);
      }
    });
    var $searchTo = $('#searchTo');
    airports.forEach(function(airport) {
      var $option = $('<option/>').text(airport).val(airport);
      $searchTo.append($option);
    });

  },

  //Listen for ENTER keypress
  checkForEnterSearchFlights: function (event) {
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY && !event.shiftKey) {
      event.preventDefault();
      this.searchForFlights();
    }
  },

  //Create a new aeroplane from data entered on screen
  searchForFlights: function () {

    var fromAirport = this.$el.find("#searchFrom").val();
    var toAirport = this.$el.find("#searchTo").val();
    var searchResults = "";
    var x =this.$el;
///////////////////////

    // app.aeroplanes.fetch().done(function () {
    //   var planes = [];
    //
    //   for (var i = 0; i < app.aeroplanes.models.length; i++) {
    //     var id = app.aeroplanes.models[i].attributes.id;
    //     var name = app.aeroplanes.get(id).attributes.name;
    //     planes.push([id, name]);
    //   };
    //   var $flightPlane = $('#flightPlane');
    //   planes.forEach(function(plane) {
    //     var $option = $('<option/>').text(plane[1]).attr({value: plane[0]});
    //     $flightPlane.append($option);
    //   });
    // });

///////////////////////
    this.collection.each(function(f) {
      if (f.attributes.origin === fromAirport && f.attributes.destination === toAirport) {
        var plane = app.aeroplanes.get(f.attributes.aeroplane_id ).attributes;
        var planeName = plane.name;
        var searchResults = "<td>" + f.attributes.date + "</td><td>" + f.attributes.origin + "/" + f.attributes.destination + "</td><td>" + planeName+ "</td>";
        $('#searchContentTable').append(searchResults);
      }
    });
  }
});
