const express = require("express");

const router = express.Router();
const passport = require("passport");

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send("no user found");
    }
    return req.login(user, (e) => {
      if (e) {
        return next(e);
      }
      return res.send(user);
    });
  })(req, res, next);
});

module.exports = router;
