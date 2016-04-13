var app = app || {};


app.userView = Backbone.View.extend({

  el: "#main",

  render: function () {
    var userView = $("#userView").html();
    this.$el.html( userView );
  }
});
