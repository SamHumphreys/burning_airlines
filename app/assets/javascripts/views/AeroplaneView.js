var app = app || {};

app.AeroplaneView = Backbone.View.extend({

  tagName: "li",

  render: function (){
    var name = this.model.get("rows");
    // this.$el.text(name & " rows: " & this.model.get("rows") & " columns: " & this.model.get("columns"));
    this.$el.text(this.model.get("name") + " Rows: " + this.model.get("rows") + " Columns: " + this.model.get("columns"));
    this.$el.appendTo("#aeroplaneData");

  }

});
    // debugger;
