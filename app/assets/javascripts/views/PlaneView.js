var app = app || {};

app.AeroplaneView = Backbone.View.extend({

  tagName: "li",

  render: function (){
    var content = this.model.get("name");
    this.$el.text(content);
    this.$el.prependTo("#aeroplaneData");
  }

});
