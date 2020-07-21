require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
// const trackRoutes = require("./routes/trackRoutes");
// const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);

// app.use(trackRoutes);

//mongodb+srv://<username>:<password>@cluster0.msfeb.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongoUri =
  "mongodb+srv://admin:adminarch123@cluster0.msfeb.mongodb.net/<dbname>?retryWrites=true&w=majority";
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("hi mmm");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
