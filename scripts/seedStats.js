require("dotenv").config();
const mongoose = require("mongoose");
const stats = require("../models/stats");
const statsData = require("../data/stats");

const seedDatabase = async () => {
  try {
    //Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully");

    //Insert custom question
    await stats.insertMany(statsData);
    console.log("Stats inserted successfully");

    //Disconnect after seeding
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
