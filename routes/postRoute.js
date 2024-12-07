const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

// GET
router.get("/", (req, res) => {
  res.render("postRoute", { title: "Posts", posts });
});

module.exports = router;
