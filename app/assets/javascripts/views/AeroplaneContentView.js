var app = app || {};

app.AeroplaneContentView  = Backbone.View.extend({

  el: ".main",



  events: {
    'click #addPlaneButton' : 'createAeroplane',
    'keypress textarea' : 'checkForEnter'
  },

  initialize: function() {
    console.log("INIT");
  },

  //Function to list all Planes
  showAll : function (){
    this.collection.each(function (p) {
      var aeroplaneView = new app.AeroplaneView({model: p});   //send a model from Aeroplane collection to AeroPlaneView to render
      aeroplaneView.render();
    });
  },


  //Listen for ENTER keypress
  checkForEnter: function (event) {
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY && !event.shiftKey) {
      event.preventDefault();
      this.createAeroplane();
    }
  },

  renderAdd : function () {
    console.log("here renderAdd");
  },


  //Create a new aeroplane from data entered on screen
  createAeroplane: function () {
    this.$(".planes_content_table").remove();
    this.$("#resultsPlaneName").remove();
    var newAeroplane = new app.Aeroplane();
    var newName = this.$el.find("#aeroplaneName").val();
    var newRows = this.$el.find("#aeroplaneRows").val();
    var newColumns = this.$el.find("#aeroplaneColumns").val();
      newAeroplane.set({
        name: newName,
        rows: newRows,
        columns: newColumns
      });
    newAeroplane.save();
    this.$el.find("#aeroplaneName").val('').focus();
    this.$el.find("#aeroplaneRows").val('');
    this.$el.find("#aeroplaneColumns").val('');
    var strPlane ="<h4 id='resultsPlaneName'>"+newName+"</h4></br>";
    this.$el.append(strPlane);

    //draw the layout grid for a new plane. Note HTML <TR> are columns and HTML <TD> are rows
    var rowsLimit = 0;
    newRows >13 ?  rowsLimit = 13 : rowsLimit = newRows;

    if (newColumns > 0) {
      var strRowColHTML ='<table class="planes_content_table">';
      for (var i = 1; i <= newColumns; i++) {
        strRowColHTML += "<tr><td>"+String.fromCharCode(64+i);
        if (newRows > 0) {
          //add <TD> elements for each row
          for (var j = 1; j <= rowsLimit; j++) {
            strRowColHTML += "<td>"+String.fromCharCode(745)+"</td>";
          }
          strRowColHTML += "</tr>";
        }
      }
      strRowColHTML += "<tr><td></td>";
      for (var i = 1; i <= rowsLimit; i++){
        if (newRows <=13 ) {
          strRowColHTML += "<td>"+i+"</td>";
        }
        else if (i < 11 && newRows >13){
          strRowColHTML += "<td>"+i+"</td>";
        }
        else if ((i ===11 || i ===23 ) && newRows >13){
          strRowColHTML += "<td>..</td>";
        }
        else if (i ===13  && newRows >13) {
          strRowColHTML += "<td>"+newRows+"</td>";
        }
        else {}
      }
      strRowColHTML += "</tr></table>";
    }
    // strRowColHTML += "";
    console.log(strRowColHTML);
    debugger;
    var addRows = this.$el.find("#planeRowContent");
    this.$el.append(strRowColHTML);
  },

});
