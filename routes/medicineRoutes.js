// routes/medicineRoutes.js
const express = require("express");
const router = express.Router();

const {
  addMedicine,
  getMedicines,
  markTaken
} = require("../controllers/medicineControllers");

// Add a new medicine
router.post("/add", addMedicine);

// Get all medicines for a patient
router.get("/:patientId", getMedicines);

// Mark a medicine as taken
router.put("/taken/:id", markTaken);

module.exports = router;