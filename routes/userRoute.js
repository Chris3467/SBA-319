const express = require("express");
const router = express.Router();
const User = require("../models/users");

// GET
router.get("/", async (req, res) => {
  const foundUser = await User.find(req.params);
  console.log(foundUser);
  res.render("userRoute", { title: "Users", foundUser });
});

// Adding a new user
router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, age, ranking } = req.body;
  await User.create([
    {
      name,
      age,
      ranking,
    },
  ]);

  res.status(200).redirect("/users");
});

// DELETE
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).redirect("/users");
});

// UPDATE

module.exports = router;
