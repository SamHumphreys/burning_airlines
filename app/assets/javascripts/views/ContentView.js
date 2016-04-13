var app = app || {};

app.ContentView = Backbone.View.extend({

  tagName: "li",

  render : function (){
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);
    var ContentView = new app.ContentView({collection: app.aeroplanes});
    ContentView.render();
  }

});
