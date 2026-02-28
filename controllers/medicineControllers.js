const Medicine = require("../models/Medicine");

// Add a new medicine
exports.addMedicine = async (req, res) => {
  try {
    const { patientId, name, dose, time } = req.body;

    if (!patientId || !name || !dose || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const medicine = new Medicine({ patientId, name, dose, time });

    await medicine.save();

    res.json({ message: "Medicine added", medicine });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get medicines for a patient
exports.getMedicines = async (req, res) => {
  try {
    const { patientId } = req.params;

    if (!patientId) {
      return res.status(400).json({ message: "Patient ID is required" });
    }

    const medicines = await Medicine.find({ patientId });

    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark a medicine as taken
exports.markTaken = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Medicine ID is required" });
    }

    const updatedMedicine = await Medicine.findByIdAndUpdate(
      id,
      { taken: true },
      { new: true }
    );

    if (!updatedMedicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    res.json({ message: "Marked taken", medicine: updatedMedicine });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};