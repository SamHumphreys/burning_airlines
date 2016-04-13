_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};

var airports = ["","BNE", "CBR", "DWN", "MCY", "MLB", "NCL", "PTH", "SYD", "TVL"];

$(document).ready(function(){
  app.aeroplanes = new app.Aeroplanes();
  app.aeroplanes.fetch();

  app.flights = new app.Flights();
  app.flights.fetch().done(function(){
    app.router = new app.Router();
    Backbone.history.start();
  });

});
