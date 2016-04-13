var app = app || {};

app.AppView = Backbone.View.extend({

  el: ".main",

  render : function (){

  },

  aeroplanes : function (){
      var appViewTemplate = $("#aeroplaneContentTemplate").html();
      this.$el.html(appViewTemplate);
      var aeroplaneContentView = new app.AeroplaneContentView({collection: app.aeroplanes});
      aeroplaneContentView.showAll();
  },

  aeroplanesAdd : function (){
      var appViewTemplate = $("#aeroplaneAddTemplate").html();
      this.$el.html(appViewTemplate);
      var appViewTemplate = $("#aeroplaneAddContent").html();
      this.$el.append(appViewTemplate);
      var aeroplaneContentView = new app.AeroplaneContentView({collection: app.aeroplanes});
      aeroplaneContentView.renderNewPlaneControls();
  },

  flights: function () {
    var appViewTemplate = $('#flightsScreen').html();
    this.$el.html(appViewTemplate);
    var flightView = new app.FlightView({collection: app.flights});
    flightView.render();
  }
});
