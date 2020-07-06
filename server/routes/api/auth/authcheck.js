const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  if (req.user) {
    return res.status(200).send(`user ${req.user} is authorized`);
  }
  return res.status(401).send("unauthorized");
});

module.exports = router;
