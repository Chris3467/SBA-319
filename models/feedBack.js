const mongoose = require("mongoose");

const feedBackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const FeedBack = mongoose.model("FeedBack", feedBackSchema);
console.log(FeedBack);

module.exports = FeedBack;
