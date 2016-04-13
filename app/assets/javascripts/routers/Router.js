var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {  //config.routes/rb
    '' : 'index',
    'aeroplanes' : 'aeroplanesShow',
    'aeroplanesAdd' : 'aeroplanesAdd',
    'flights': 'flights'
  },

  flights: function () {
    console.log('smelly feet');
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

  aeroplanesAdd: function () { //Controllers
    console.log("Router- call aeroplanesAdd");
    var appView = new app.AppView();
    appView.aeroplanesAdd();
  }
});
