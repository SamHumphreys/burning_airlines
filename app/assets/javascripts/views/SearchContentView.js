var app = app || {};

app.AeroplaneContentView  = Backbone.View.extend({

  el: ".main",

  events: {
    'click #searchButton' : 'searchForFlights',
    'keypress textarea' : 'checkForEnterSearchFlights'
  },


  //Function to list all Planes
  showAll : function (){
    this.collection.each(function (p) {
      var aeroplaneView = new app.AeroplaneView({model: p});   //send a model from Aeroplane collection to AeroPlaneView to render
      aeroplaneView.render();
    })
  },


  //Listen for ENTER keypress
  checkForEnterSearchFlights: function (event) {
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY && !event.shiftKey) {
      event.preventDefault();
      this.createAeroplane();
    }
  },

  //Create a new aeroplane from data entered on screen
  searchForFlights: function () {
    var fromAirport = this.$el.find("#searchFrom").val();
    var toAirport = this.$el.find("#searchTo").val();
    var searchResults = "";
    this.collection.each(function(f) {
      if (f.attributes.origin === fromAirport && f.attributes.destination === toAirport) {
        // var searchResults = $('<tr/>').html('<td>' + f.date + '</td><td>' + planeID + '</td><td>' + f.origin + '/' + f.destination + '</td><td>' + f.aeroPlane_id + '</td><td>');
      }
    });
    console.log("search results:");
    console.log(searchResults);
    // search.appendTo('#searchContentTable');
  }
});
