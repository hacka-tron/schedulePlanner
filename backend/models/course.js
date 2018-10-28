const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  id: { type: String, required: true },
  credit_hours: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  prereqs: {type: [String], required: true}

});

module.exports = mongoose.model("Course", courseSchema);
