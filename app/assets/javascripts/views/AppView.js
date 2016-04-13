var app = app || {};

app.AppView = Backbone.View.extend({

  el: ".main",

  render : function (){

  },

  aeroplanes : function (){
      var appViewTemplate = $("#aeroplaneContentTemplate").html();
      this.$el.html(appViewTemplate);
      var aeroplaneContentView = new app.AeroplaneContentView({collection: app.aeroplanes});
      aeroplaneContentView.render();
  },
  flights: function () {
    var appViewTemplate = $('#flightsContent').html();
    this.$el.html(appViewTemplate);
    var flightView = new app.FlightView({collection: app.flights});
    flightView.render();
  }
});
