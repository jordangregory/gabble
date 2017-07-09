const express = require("express");
const app = express();
const expressValidator = require("express-validator");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");
const models = require("./models");
const welcomeRoutes = require("./routes/welcomeRoutes");
const homeRoutes = require("./routes/homeRoutes");
const authRoutes = require("./routes/authRoutes");
const likeRoutes = require("./routes/likeRoutes");
const gabRoutes = require("./routes/gabRoutes");
const port = process.env.PORT || 8000;

app.engine("mustache", mustacheExpress());
app.set("views", "./public");
app.set("view engine", "mustache");

app.use("/", express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "joey pants",
    resave: true,
    saveUninitialized: true,
    cookies: {
      maxAge: 600000
    }
  })
);
// console log the session
app.use(function(req, res, next) {
  console.log(req.session);
  next();
});

// Routers
app.use("/welcome", welcomeRoutes);
app.use("/", homeRoutes);
app.use("/auth", authRoutes);
app.use("/likes", likeRoutes);
app.use("/gabs", gabRoutes);

app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
