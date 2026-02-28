const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

// Get all medicines for patient
router.get("/medicines/:patientId", patientController.getMedicines);

// Optional: mark medicine as taken
router.patch("/medicine-taken/:medicineId", patientController.markMedicineTaken);

module.exports = router;