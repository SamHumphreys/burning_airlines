_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};


$(document).ready(function(){

  app.router = new app.Router();

  app.aeroplanes = new app.Aeroplanes();
  app.aeroplanes.fetch();

  app.flights = new app.Flights();
  app.flights.fetch().done(function () {
    Backbone.history.start();
  });


  // **** un-comment this next bit if you want a timer ****
  // window.setInterval(function () {
  //   app.aeroplanes.fetch();
  //   app.flights.fetch();
  // }, 4000);

});
