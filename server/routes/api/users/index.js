const express = require("express");
const UserModel = require("../../../models/user.model");

const router = express.Router();

// define the home page route
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    console.log("users", users);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const user = req.body;
  try {
    const result = await UserModel.create(user);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", (req, res) => {
  res.send("one user");
});

module.exports = router;
