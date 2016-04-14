var app = app || {};

app.ReservationsView  = Backbone.View.extend({

  el: ".main",

  events: {
    'click #searchButton' : 'searchForFlights',
    'keypress textarea' : 'checkForEnterSearchFlights',
    'change #searchFrom' : 'loadDestinations'
  },

  initialize: function () {
    console.log("INIT app.ReservationsView ");
  },

  renderReservations : function () {

    this.$("#searchContentTable").remove();
    var appViewTemplate = $("#searchContentTemplate").html();
    this.$el.append(appViewTemplate);
    var fromAirport = this.$el.find("#searchFrom").val();
    var toAirport = this.$el.find("#searchTo").val();
    var searchResults = "";
    var x =this.$el;
    this.collection.each(function(f) {
      if (f.attributes.origin === fromAirport
        && f.attributes.destination === toAirport) {
        var plane = app.aeroplanes.get(f.attributes.aeroplane_id ).attributes;
        var planeName = plane.name;
        var searchResults = "<td>" + f.attributes.date + "</td><td><a href='#flights/" + f.attributes.id + "'>" + f.attributes.id + "</a></td><td>" + f.attributes.origin + "/" + f.attributes.destination + "</td><td>" + planeName+ "</td>";
        $('#searchContentTable').append(searchResults);
      }
    });


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

  loadDestinations: function() {
    //Clear destinations drop-down
    var select = document.getElementById("searchTo");
    var length = select.options.length;
    for (i = 0; i < length; i++) {
      select.options[i] = null;
    }
    //Populate departure drop-down
    var airports = [];
    varOrigin = $('#searchFrom').val();
    this.collection.each(function(f) {
      if (varOrigin === f.attributes.origin) {
        airports.push(f.attributes.destination);
      }
    });
    //Populate destination drop-down
    var $searchTo = $('#searchTo');
    airports.forEach(function(airport) {
      var $option = $('<option/>').text(airport).val(airport);
      $searchTo.append($option);
    });
  },

  //Listen for ENTER keypress
  checkForEnterSearchFlights: function (event) {
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY && !event.shiftKey) {
      event.preventDefault();
      this.searchForFlights();
    }
  },

  //Create a new aeroplane from data entered on screen
  searchForFlights: function () {
    this.$("#searchContentTable").remove();
    var appViewTemplate = $("#searchContentTemplate").html();
    this.$el.append(appViewTemplate);
    var fromAirport = this.$el.find("#searchFrom").val();
    var toAirport = this.$el.find("#searchTo").val();
    var searchResults = "";
    var x =this.$el;
    this.collection.each(function(f) {
      if (f.attributes.origin === fromAirport
        && f.attributes.destination === toAirport) {
        var plane = app.aeroplanes.get(f.attributes.aeroplane_id ).attributes;
        var planeName = plane.name;
        var searchResults = "<td>" + f.attributes.date + "</td><td><a href='#flights/" + f.attributes.id + "'>" + f.attributes.id + "</a></td><td>" + f.attributes.origin + "/" + f.attributes.destination + "</td><td>" + planeName+ "</td>";
        $('#searchContentTable').append(searchResults);
      }
    });
  }
});
