var app = app || {};

app.ContentView = Backbone.View.extend({

  tagName: "li",

  render: function (){
    var content = this.model.get("name");
    this.$el.text(content);
    this.$el.prependTo("temp");
  }

});
