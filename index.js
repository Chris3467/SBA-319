const express = require("express");
const db = require("./db/conn");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

// View Engine
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoute = require("./routes/indexRoute.js");
const postRoute = require("./routes/postRoute.js");
const userRoute = require("./routes/userRoute.js");

// Middleware
app.use((req, res, next) => {
  console.log(`New request: ${req.method} ${req.url}`);
  next();
});

const logRequestData = (req, res, next) => {
  console.log(
    `${req.method} request made to ${req.url} at ${new Date().toISOString()}`
  );
  next();
};
app.use(logRequestData);

app.use(methodOverride("_method"));

// Routes
app.use("/indexRoute", indexRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(port, () => {
  console.log("I can hear you");
});
