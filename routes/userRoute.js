const express = require("express");
const router = express.Router();
const users = require("../data/users");

// GET
router.get("/", (req, res) => {
  res.render("userRoute", { title: "Users", users });
});

module.exports = router;
