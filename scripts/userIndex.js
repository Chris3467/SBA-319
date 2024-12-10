require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/users");

const createIndexes = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // Create indexes in the database
    await User.createIndexes();
    console.log("Indexes created successfully.");

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (err) {
    console.error("Error while creating indexes:", err);
    process.exit(1);
  }
};

createIndexes();

/* require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/users");
const createIndexes = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully.");
    User.syncIndexes();
    console.log("Indexes created successfully for the User model"); // Close the connection await mongoose.connection.close(); console.log("Connection closed"); } catch (error) { console.error("Error creating indexes:", error); process.exit(1); } })();
    console.log('Text index on "question" field created successfully.');
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (error) {
    console.error("Error while creating indexes:", error);
    process.exit(1);
  }
};
createIndexes(); */
