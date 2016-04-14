var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',

  defaults: {
    user_id: 0,
    flight_id: 0,
    row: "0",
    col: "0"
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
