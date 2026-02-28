const startCronJob = require("./controllers/cronController");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());


startCronJob();

// routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/family", require("./routes/familyRoutes"));

app.use("/api/patient", require("./routes/patientRoutes"));
app.use("/api/medicine", require("./routes/medicineRoutes"));


// serve frontend
app.use(express.static(path.join(__dirname, "frontend"), {
  index: "index.html",
  extensions: ["html"]
}));

// Root route - serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Fallback: serve index.html for all routes (for SPA routing)
app.get(/^(?!\/api\/).*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log("Server running on port " + PORT);

});