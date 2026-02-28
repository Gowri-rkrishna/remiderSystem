const Medicine = require("../models/Medicine");

// Get all medicines for the current patient
exports.getMedicines = async (req, res) => {
  try {
    const patientId = req.params.patientId;

    const medicines = await Medicine.find({ patientId });
    res.json(medicines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Optional: mark medicine as taken (if patient themselves can do it)
exports.markMedicineTaken = async (req, res) => {
  try {
    const { medicineId } = req.params;

    const medicine = await Medicine.findById(medicineId);
    if (!medicine) return res.status(404).json({ message: "Medicine not found" });

    medicine.taken = true;
    await medicine.save();

    res.json({ message: "Medicine marked as taken", medicine });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};