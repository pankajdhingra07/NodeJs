const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  BuName: { type: String, required: true },
  CohortName: { type: String, required: true },
  CareerTrack: { type: String, required: true },
}, { collection: 'BusinessUnit' });

//Creating the model, model is the runtime object instance of the schema
module.exports = mongoose.model("BusinessUnit1", schema);