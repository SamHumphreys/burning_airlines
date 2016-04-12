var app = app || {};

app.Aeroplane = Backbone.Model.extend({
  urlRoot: '/aeroplanes',

  defaults: {
    id : 0,
    name: "",
    rows: "0",
    columns: "0"
  }
});

// Model designed to map to the following Rails model
// # == Schema Information
// #
// # Table name: aeroplanes
// #
// #  id         :integer          not null, primary key
// #  name       :string
// #  rows       :string
// #  columns    :string
// #  created_at :datetime         not null
// #  updated_at :datetime         not null
// #
