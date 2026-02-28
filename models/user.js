const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  role: {
    type: String,
    enum: ["patient", "family"],
    required: true
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  patientId: {
    type: String
  },

  linkedPatientId: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);