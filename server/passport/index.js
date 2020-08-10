const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserModel.findOne({ username }).lean();
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
      // remove password from user before sending to client
      delete user.password;
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  return done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
  try {
    const user = await UserModel.findOne({ username }).lean();
    // remove the password from authcheck
    // doesn't affect login
    delete user.password;
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

module.exports = passport;
