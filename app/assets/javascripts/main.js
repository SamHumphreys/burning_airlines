_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};


$(document).ready(function(){

  app.router = new app.Router();

  app.aeroplanes = new app.Aeroplanes();
  Backbone.history.start();
  app.aeroplanes.fetch();

  app.flights = new app.Flights();
  app.flights.fetch();


  // **** un-comment this next bit if you want a timer ****
  window.setInterval(function () {
    app.aeroplanes.fetch();
    app.flights.fetch();
  }, 4000);

});
