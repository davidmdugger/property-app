const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// CREATE PROPERTY SCHEMA
const PropertySchema = new Schema({
  name: {
    type: String,
    require: true
  },
  img: {
    type: String
  }
});

module.exports = Property = mongoose.model("Property", PropertySchema);
