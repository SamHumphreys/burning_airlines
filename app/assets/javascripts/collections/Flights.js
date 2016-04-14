var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight,
  initialize: function() {
    this.on('add', function (flight) {
      var flightView = new app.FlightView({ model: flight });
      flightView.render();
    });
  }
});

//
// create_table "flights", force: :cascade do |t|
//   t.integer  "aeroplane_id"
//   t.string   "origin"
//   t.string   "destination"
//   t.date     "date"
//   t.datetime "created_at",   null: false
//   t.datetime "updated_at",   null: false
// end
