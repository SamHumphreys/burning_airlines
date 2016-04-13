var app = app || {};

app.AeroplaneContentView  = Backbone.View.extend({
  // el: "#aeroplaneViewTemplate",
  render : function (){
    this.collection.each(function (p) {
      var aeroplaneView = new app.AeroplaneView({model: p});   //send a model from Aeroplane collection to AeroPlaneView to render
      aeroplaneView.render();
    });
  }
});

// app.AppView = Backbone.View.extend({
//   el: '#main',  //Seclect (el) to specify where this view should appear on the page... could change #main to e.g. #sidebar and will continute to work. could use this.el if wnated dom version
//   render: function () {
//     // this.$el.empty();  //Don't want HTML in the javascript
//     var template = $('#appViewTemplate').html();
//     this.$el.html(template);
//     this.collection.each(function (p) { //is collection dervived from the Backbone.Collection class
//       var postListView = new app.PostListView({model: p});   //need to send a model when calling PostListView
//       postListView.render();
//     });
//   }
// });
