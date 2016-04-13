var app = app || {};

app.secretView = Backbone.View.extend ({
  tagName: 'li',
  render: function () {
    var date = this.model.get('date');
    var origin = this.model.get('origin');
    var destination = this.model.get('destination');
    
  }

});
