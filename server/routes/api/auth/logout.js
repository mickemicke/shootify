const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  if (req.user) {
    req.logout();
  }
  res.status(200).send();
});

module.exports = router;
