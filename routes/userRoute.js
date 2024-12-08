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
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).redirect("/users");
  } catch (err) {
    console.error(err, "Failed deleting user");
    res.status(500).send("Server error");
  }
});

// UPDATE
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).redirect("/users");
  } catch (err) {
    console.error(err, "Failed updating user");
    res.status(500).send("Server error");
  }
});

module.exports = router;
