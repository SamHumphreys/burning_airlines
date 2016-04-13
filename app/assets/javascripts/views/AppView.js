var app = app || {};

app.AppView = Backbone.View.extend({

  el: ".main",

  render : function (){
    console.log("AppView");
    var appViewTemplate = $("#aeroplaneContentTemplate").html();
    this.$el.html(appViewTemplate);

    var aeroplaneContentView = new app.AeroplaneContentView({collection: app.aeroplanes});
    aeroplaneContentView.render();
  }
});
