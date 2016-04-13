var app = app || {};

app.AeroplaneContentView  = Backbone.View.extend({

  el: ".main",

  events: {
    'click button' : 'createPlane',
    'keypress textarea' : 'checkForEnter'
  },
  //Function to list all Planes
  showAll : function (){
    this.collection.each(function (p) {
      var aeroplaneView = new app.AeroplaneView({model: p});   //send a model from Aeroplane collection to AeroPlaneView to render
      aeroplaneView.render();
    });
  },

  //Funcitons to create a new aeroplane
  //render input controls for new aeroplane input
  renderNewPlaneControls: function(){
    console.log("AeroplaneContentView.renderNewPlaneControls");
    //Add Input boxes for Name, Row, Column
    this.$el.appendTo("<label for='choices'># Choices for Students</label>");
    this.$el.appendTo("<input type='number' name='choices' step=1 />");


    // var secretInputViewTemplate = $("#secretInputViewTemplate").html();
    // this.$el.html(secretInputViewTemplate);
  },

  //Listen for ENTER keypress
  checkForEnter: function (event) {
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY && !event.shiftKey) {
      event.preventDefault();
      this.createAeroplane();
    }
  },

  //Create a new aeroplane from data entered on screen
  createAeroplane: function () {
    var newAeroplane = new app.Aeroplane();
    var newName = this.$el.find("#aeroplaneName").val();
    var newRows = this.$el.find("#aeroplaneRows").val();
    var newColums = this.$el.find("#aeroplaneColumns").val();
      newAeroplane.set({
        name: newName,
        rows: newRows,
        columns: newColumns
      });
    newAeroplane.save();
    app.Aeroplanes.add(newAeroplane);
    this.$el.find("#aeroplaneName").val('').focus();
    this.$el.find("#aeroplaneRows").val('');
    this.$el.find("#aeroplaneColumns").val('');
  },

});
