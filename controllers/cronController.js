const cron = require("node-cron");
const Medicine = require("../models/Medicine");
const Log = require("../models/Log");

const startCronJob = () => {
  cron.schedule("*/5 * * * *", async () => {
    console.log("Checking for missed medicines...");
    const now = new Date();
    const medicines = await Medicine.find({ taken: false });

    for (let med of medicines) {
      const medTime = new Date(med.createdAt);
      const diffMinutes = (now - medTime) / (1000 * 60);

      if (diffMinutes > 30) {
        const alreadyLogged = await Log.findOne({
          medicine: med._id,
          status: "missed",
        });

        if (!alreadyLogged) {
          await Log.create({
            patient: med.patientId,
            medicine: med._id,
            status: "missed",
          });

          console.log("Medicine marked as missed:", med.name);
        }
      }
    }
  });
};

module.exports = startCronJob;