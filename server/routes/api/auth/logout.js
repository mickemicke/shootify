const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  req.logout();
  res.clearCookie("connect.sid");
  req.session.destroy(() => res.status(200).send("logged out"));
});

module.exports = router;
