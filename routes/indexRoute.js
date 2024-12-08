const express = require("express");
const router = express.Router();
const comments = require("../data/comments");
const User = require("../models/users");

// GET
router.get("/", (req, res) => {
  res.render("indexRoute", { title: "Home", comments });
});

/* // Adding a new user
router.post("/", (req, res) => {
  const { name, age, ranking } = req.body;
  const newUser = {
    name,
    age,
    ranking,
    id: users.length + 1,
  };

  users.push(newUser);
  res.redirect("/users");
}); */

module.exports = router;
