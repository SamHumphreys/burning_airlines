var app = app || {};

app.Aeroplanes = Backbone.Collection.extend({
  url: '/aeroplanes',
  //model this collection is based on
  model: app.Aeroplane,
  initialize: function() {
    this.on("add", function (aeroplane) {
      var aeroplaneView = new app.AeroplaneView({
        model: aeroplane
      });
      aeroplaneView.render();
    });
  }
});
