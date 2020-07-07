const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  if (req.user) {
    return res.status(200).send(req.user);
  }
  return res.status(401).send(false);
});

module.exports = router;
