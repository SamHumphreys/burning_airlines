var app = app || {};

app.AeroplaneContentView  = Backbone.View.extend({
  render : function (){
    this.collection.each(function (p) {
      var aeroplaneView = new app.AeroplaneView({model: p});   //send a model from Aeroplane collection to AeroPlaneView to render
      aeroplaneView.render();
    });
  }
});
