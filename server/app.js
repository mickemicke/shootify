require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const { v4: uuidv4 } = require("uuid");
const passport = require("./passport/index");
const apiRoutes = require("./routes/api/index");

const port = 4040;

const mongohost =
  process.env.NODE_ENV === "development"
    ? process.env.MONGO_DEV_HOST
    : process.env.MONGO_PROD_HOST;

mongoose
  .connect(mongohost, { useNewUrlParser: true })
  .then(() => {
    console.log(`MongoDB connected ${mongohost}`);
  })
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.static("public"));

app.use(
  session({
    genid: () => uuidv4(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "../client", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public", "index.html"));
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server has started on ${port}!`);
});
