const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({

  patientId: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  dose: {
    type: String,
    required: true
  },

  time: {
    type: String,
    required: true
  },

  taken: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Medicine", MedicineSchema);
