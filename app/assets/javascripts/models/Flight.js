var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights'
});


// create_table "flights", force: :cascade do |t|
//   t.integer  "aeroplane_id"
//   t.string   "origin"
//   t.string   "destination"
//   t.date     "date"
//   t.datetime "created_at",   null: false
//   t.datetime "updated_at",   null: false
// end
