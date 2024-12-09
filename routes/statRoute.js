const express = require("express");
const router = express.Router();
const Stats = require("../models/stats");

// GET
router.get("/", async (req, res) => {
  try {
    const foundStats = await Stats.find(req.params);
    console.log(foundStats);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch stats" });
  }
});

// Seed Route this works
/* router.get("/seed", async (req, res) => {
  try {
    await Stats.create([
      { name: "Katie", elo: 1500, wins: 100 },
      { name: "Devon", elo: 1400, wins: 80 },
      { name: "Fatou", elo: 1600, wins: 120 },
      { name: "Adam", elo: 2000, wins: 250 },
      { name: "Rajeen", elo: 1650, wins: 87 },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.status(400).send(err);
  }
}); */

module.exports = router;
