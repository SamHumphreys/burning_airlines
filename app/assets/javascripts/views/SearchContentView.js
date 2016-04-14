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
    //Clear destinations drop-down
    var select = document.getElementById("searchTo");
    var length = select.options.length;
    for (i = 0; i < length; i++) {
      select.options[i] = null;
    }
    //Populate departure drop-down
    var airports = [];
    varOrigin = $('#searchFrom').val();
    this.collection.each(function(f) {
      if (varOrigin === f.attributes.origin) {
        airports.push(f.attributes.destination);
      }
    });
    //Populate destination drop-down
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
    this.$("#searchContentTable").remove();
    var appViewTemplate = $("#searchContentTemplate").html();
    this.$el.append(appViewTemplate);
    var fromAirport = this.$el.find("#searchFrom").val();
    var toAirport = this.$el.find("#searchTo").val();
    var searchResults = "";
    var x =this.$el;
    this.collection.each(function(f) {
      if (f.attributes.origin === fromAirport
        && f.attributes.destination === toAirport) {
        var plane = app.aeroplanes.get(f.attributes.aeroplane_id ).attributes;
        var planeName = plane.name;
        var searchResults = "<td>" + f.attributes.date + "</td><td><a href='#flights/" + f.attributes.id + "'>" + f.attributes.id + "</a></td><td>" + f.attributes.origin + "/" + f.attributes.destination + "</td><td>" + planeName+ "</td>";
        $('#searchContentTable').append(searchResults);
      }
    });
  }
});
