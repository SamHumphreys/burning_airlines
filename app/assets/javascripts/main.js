_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};

$(document).ready(function(){
  app.aeroplanes = new app.Aeroplanes();
  app.aeroplanes.fetch().done(function(){
    app.router = new app.Router();
    Backbone.history.start();
  });

  app.flights = new app.Flights();
  app.flights.fetch();

});
