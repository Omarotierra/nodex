const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.options("*", cors());

const port = 8080;

app.get("/", (req, res, next) => {
  res.send("node express api <br> by adsoft");
});

app.get("/header", (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get("/work-experience", (req, res, next) => {
  res.sendfile("assets/work-experience.json");
});

app.get("/skills", (req, res, next) => {
  res.sendfile("assets/skills.json");
});

app.get("/achievements", (req, res, next) => {
  res.sendfile("assets/achievements.json");
});

app.get("/interest", (req, res, next) => {
  res.sendfile("assets/interest.json");
});

app.get("/hours", (req, res, next) => {
  res.sendfile("assets/hours.json");
});

app.get("/size", (req, res, next) => {
  res.sendfile("assets/size.json");
});

app.get("/3a_test1", (req, res, next) => {
  res.sendfile("assets/3a_test1.json");
});

app.get("/3a_test2", (req, res, next) => {
  res.sendfile("assets/3a_test2.json");
});

app.get("/3a_test3", (req, res, next) => {
  res.sendfile("assets/3a_test3.json");
});

app.get("/3a_test4", (req, res, next) => {
  res.sendfile("assets/3a_test4.json");
});

app.listen(port, () => console.log("listening on port " + port));
