const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserModel.findOne({ username });

      if (!user) {
        return done(null, false, { message: "No user found" });
      }
      const matchedPasswords = await bcrypt.compareSync(
        password,
        user.password
      );

      if (!matchedPasswords) {
        return done(null, false, { message: "Invalid credentials" });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
  try {
    const user = await UserModel.findOne({ username });
    return done(null, user.username);
  } catch (error) {
    return done(error);
  }
});

module.exports = passport;
