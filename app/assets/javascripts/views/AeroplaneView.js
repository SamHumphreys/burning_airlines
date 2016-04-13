var app = app || {};

app.AeroplaneView = Backbone.View.extend({

  tagName: "li",

  render: function (){
    console.log("rendering aeroplane");
    var name = this.model.get("name");
    this.$el.text(name);
    debugger;
    this.$el.appendTo("#aeroplaneData");
  }

});
