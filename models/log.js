const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  medicine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Medicine",
    required: true
  },
  status: {
    type: String,
    enum: ["taken", "missed"],
    required: true
  },
  takenAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model("Log", logSchema);