var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {  //config.routes/rb
    '' : 'index',
    'aeroplanes' : 'aeroplanesRoute',
    'flights': 'flights'
  }
  ,
  flights: function () {
    var flightView = new app.flightView({collection: flights});
    console.log(appView);
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
  }

});
