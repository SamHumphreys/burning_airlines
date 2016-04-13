var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {  //config.routes/rb
    '' : 'index',
    'aeroplanes' : 'aeroplanesRoute',
    'flights': 'flights',
    'users': 'users'
  },

  index: function () { //Controllers
    console.log("Main Page is loaded");
    var appView = new app.AppView();
    appView.render();
  },

  aeroplanesRoute: function () { //Controllers
    console.log("Router");
    var appView = new app.AppView();
    appView.aeroplanes();
  },

  flights: function () {
    var appView = new app.AppView();
    appView.flights();
  },

  users: function () {
    console.log("users routes something something");
    var appView = new app.AppView();
    appView.users();
  }

});
