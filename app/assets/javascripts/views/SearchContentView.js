var app = app || {};

app.AeroplaneSearchView  = Backbone.View.extend({

  el: ".main",

  events: {
    'click #searchButton' : 'searchForFlights',
    'keypress textarea' : 'checkForEnterSearchFlights'
  },

  initialize: function () {
    console.log("INIT app.AeroplaneSearchView ");
  },

  // //Function to list all Planes
  // showAll : function (){
  //   this.collection.each(function (p) {
  //     var aeroplaneView = new app.AeroplaneView({model: p});   //send a model from Aeroplane collection to AeroPlaneView to render
  //     aeroplaneView.render();
  //   })
  // },
  renderAdd : function () {
    console.log("here renderAdd");
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
