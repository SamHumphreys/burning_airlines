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
      var appViewTemplate = $("#headerViewTemplate").html();
      this.$el.html(appViewTemplate);
      var appViewTemplate = $("#aeroplaneAddTemplate").html();
      this.$el.append(appViewTemplate);
      var appViewTemplate = $("#aeroplaneAddContent").html();
      this.$el.append(appViewTemplate);
      // debugger;
      var xyz = new app.AeroplaneContentView();
      xyz.renderAdd();
  },

  search : function (){
      var appViewTemplate = $("#headerViewTemplate").html();
      this.$el.html(appViewTemplate);
      var appViewTemplate = $("#searchControlsTemplate").html();
      this.$el.append(appViewTemplate);
      var appViewTemplate = $("#searchContentTemplate").html();
      this.$el.append(appViewTemplate);
      var aeroplaneSearchView = new app.AeroplaneSearchView({collection: app.flights});
      aeroplaneSearchView.renderAdd();
  },

  flights: function () {
    this.$el.html();
    var appViewTemplate = $("#headerViewTemplate").html();
    this.$el.append(appViewTemplate);
    var appViewTemplate = $('#createFlight').html();
    this.$el.append(appViewTemplate);
    var appViewTemplate = $('#flightsViewTemplate').html();
    this.$el.append(appViewTemplate);
  }
});
