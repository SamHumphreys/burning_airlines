var app = app || {};

app.ReservationsView  = Backbone.View.extend({

  el: ".main",

  events: {
    'click #searchButton' : 'searchForFlights',
    'keypress textarea' : 'checkForEnterSearchFlights',
    'change #searchFrom' : 'loadDestinations',
    'click td' : 'testFn'
  },

  initialize: function () {
    console.log("INIT app.ReservationsView ");
  },

  testFn: function(x) {
    var row = x.currentTarget.attributes[0].value;
    var col = x.currentTarget.attributes[1].value;
    var flightId = x.currentTarget.attributes[2].value;
    var newRes = new app.Reservation();
    newRes.set({
      user_id: 99,
      flight_id: flightId,
      row: row,
      col: col
    });
    var userId = 99;
    newRes.save();
    x.toElement.textContent = "99";
    // var user  = app.users.get(userId).attributes;
    // console.log(user);
  },

  renderReservations : function (flightId) {

    var strRowColHTML ='<table class="reservation_content_table">';
    this.$("#reservationContentTable").remove();
    var appViewTemplate = $("#reservationContentTemplate").html();
    this.$el.append(appViewTemplate);
    var x =this.$el;
    app.flights.fetch().done(function() {
      console.log("FLIGHT ID: "+ flightId);
      var flight = app.flights.get(flightId).attributes;
      var plane  = app.aeroplanes.get(flight["aeroplane_id"]).attributes;
      var columns = plane.columns;
      var rows = plane.rows;
      if (rows > 0) {
        for (var i = 0; i <= rows; i++) {
          if (columns > 0) {
            //add <TD> elements for each column
            for (var j = 0; j <= columns; j++) {
              if (i===0) { //Head of each column will be labled A, B, C...
                if (j===0) {
                  strRowColHTML += "<tr><td>LOO";
                }
                else {
                  strRowColHTML += "</td><td>"+String.fromCharCode((64+j));
                }
              }
              else {
                if (j===0) {

                  strRowColHTML += "<tr><td>"+i;
                }
                else {
                    strRowColHTML +=
                          "</td><td data-r='" + i +"' data-c='" + j+ "' data-f='"
                          + flightId + "'>"+String.fromCharCode(745);

                }
              }
            }
            strRowColHTML += "</tr>";
          }
        }
        strRowColHTML += "</tr></table>";
      }
      // strRowColHTML += "";
      var addRows = x.find("#planeRowContent");
      x.append(strRowColHTML);
    });
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
