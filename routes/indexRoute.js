const express = require("express");
const router = express.Router();
const comments = require("../data/comments");

// GET
router.get("/", (req, res) => {
  res.render("indexRoute", { title: "Home", comments });
});

module.exports = router;
