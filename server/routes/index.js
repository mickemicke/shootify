const express = require("express");

const router = express.Router();

// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

// define the home page route
router.use("/users", (req, res) => {
  res.send("users page");
});

router.get("/users", (req, res) => {
  res.send("all users");
});

router.get("/users/:id", (req, res) => {
  res.send("one user");
});

module.exports = router;
