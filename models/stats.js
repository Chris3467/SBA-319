const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema(
  {
    elo: { type: Number, required: true },
    wins: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Stats = mongoose.model("Stats", statsSchema);
console.log(Stats);

module.exports = Stats;
