_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};

$(document).ready(function(){
  app.aeroplanes = new app.Aeroplanes();
  app.aeroplanes.fetch();
  app.router = new app.Router();
  Backbone.history.start();
});
