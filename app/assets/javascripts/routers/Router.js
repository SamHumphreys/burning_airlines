var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {  //config.routes/rb
    '' : 'index',
    'aeroplanes' : 'aeroplanesShow',
    'aeroplanesAdd' : 'aeroplanesAdd',
    'flights': 'flights',
    'search': 'search',
    'users': 'users',
    'flight/:id' : 'showFlight'
  },

  index: function () { //Controllers
    console.log("Main Page is loaded");
    var appView = new app.AppView();
    appView.render();
  },

  aeroplanesShow: function () { //Controllers
    console.log("Router- call aeroplanesRoute");
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
  },

  aeroplanesAdd: function () { //Controllers
    console.log("Router- call aeroplanesAdd");
    var appView = new app.AppView();
    appView.aeroplanesAdd();
  },

  search: function () { //Controllers
    console.log("Router- call SEARCH");
    var appView = new app.AppView();
    appView.search();
  },

  showFlight: function (id) { //Controllers
    console.log("SHOW FLIGHT");
    console.log(id);
    var appView = new app.AppView();
    appView.showFlight(id);
    // var appView = new app.AppView();
    // appView.search();
  }

});
