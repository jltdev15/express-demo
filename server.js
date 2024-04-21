const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const userRoutes = require('./routes/UserRoutes')
// const users = [];

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api/v1/', userRoutes)



mongoose
  .connect("mongodb://127.0.0.1:27017/userdb", {})
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error("Error connecting to Database", err));

app.listen(port, function () {
  console.log("Server is running in port " + port);
});