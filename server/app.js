require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");

const port = 4040;
const router = require("./routes");

const mongohost =
  process.env.NODE_ENV === "development"
    ? process.env.MONGO_DEV_HOST
    : process.env.MONGO_DEV_PROD;

mongoose.connect(mongohost, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", router);

  app.listen(port, () => {
    console.log("Server has started!");
  });
});
