const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const courseRoutes = require("./routes/courses");

const app = express();

mongoose
  .connect(
    "mongodb+srv://dude:jaqrNY3SJdNprj1P@scheduleplanner-slej6.mongodb.net/schedule-data?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());

//Set access controls so no errors show up
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/courses", courseRoutes);

module.exports = app;
