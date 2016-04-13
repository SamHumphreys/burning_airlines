var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {  //config.routes/rb
    '' : 'index'
  }
  ,

  index: function () { //Controllers
    console.log("Main Page is locaded");
    var appView = new app.AppView();
    appView.render();
  }

});
