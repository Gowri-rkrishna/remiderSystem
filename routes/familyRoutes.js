const express = require("express");
const router = express.Router();

const {
  linkPatient
} = require("../controllers/familyController.js");

router.post("/link", linkPatient);

module.exports = router;