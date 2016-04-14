var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: '/reservations',
  //model this collection is based on
  model: app.Reservation,
  initialize: function() {
    this.on("add", function (reservation) {
    });
  }
});






// create_table "reservations", force: :cascade do |t|
//   t.integer  "user_id"
//   t.integer  "flight_id"
//   t.string   "row"
//   t.string   "col"
//   t.datetime "created_at", null: false
//   t.datetime "updated_at", null: false
// end
