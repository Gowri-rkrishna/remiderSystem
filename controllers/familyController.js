const Log = require("../models/Log");
const User = require("../models/user");

// Get logs for family dashboard
exports.getPatientLogs = async (req, res) => {
  try {
    const { patientId } = req.params;

    const logs = await Log.find({ patient: patientId })
      .populate("medicine")
      .sort({ createdAt: -1 });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Link a patient to a family member
exports.linkPatient = async (req, res) => {
  try {
    const { patientId, familyId } = req.body;

    const patient = await User.findOne({ patientId: patientId });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Example: store familyId in patient's document
    patient.familyId = familyId;
    await patient.save();

    res.json({ message: "Patient linked successfully", patient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};