const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../../../models/user.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await UserModel.create({
      username,
      password: hashedPassword,
    });
    res.status(201).send(result.username);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
