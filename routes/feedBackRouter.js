const express = require("express");
const router = express.Router();
const FeedBack = require("../models/feedBack");

//localhost:3000/feedback
// GET
http: router.get("/", async (req, res) => {
  try {
    const foundFeedBack = await FeedBack.find(req.params);
    console.log(foundFeedBack);
    res.status(200).json(foundFeedBack);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch feedback" });
  }
});

// Seed This works
/* router.get("/seed", async (req, res) => {
  try {
    await FeedBack.create([
      { name: "Katie", rating: 5 },
      { name: "Devon", rating: 4 },
      { name: "Adam", rating: 3 },
      { name: "Rajeen", rating: 5 },
      { name: "Fatou", rating: 4 },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.status(400).send(err);
  }
}); */

module.exports = router;
