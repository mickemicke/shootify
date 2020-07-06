const express = require("express");

const router = express.Router();
const userRoutes = require("./users/index");
const login = require("./auth/login");
const register = require("./auth/register");
// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

// define the home page route
router.get("/", (req, res) => {
  res.send("api");
});
router.use("/users", userRoutes);
router.use("/login", login);
router.use("/register", register);

module.exports = router;
