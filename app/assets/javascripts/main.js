_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};

$(document).ready(function(){
  app.Aerolanes = new app.Aeroplanes();
  app.Aeroplanes.fetch();

  app.router = new app.AppRouter();
  Backbone.history.start();
});
