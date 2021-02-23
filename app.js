const express = require("express");
let app = express();

app.set("views", "./views");
app.set("view engine", "pug");

// app.use();

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Pug Test",
    message: " a variable from the code",
    users: ["Gideon", "Brad", "Curtis"],
    date: new Date(),
  });
});

app.get("/form", (req, res) => {
  res.render(form);
});

app.get("/users/:username", (req, res) => {
  res.send(`You clicked on ${req.params.username}`);
});

app.get("/create", (req, res) => {
  console.log(req.query);
  let user = {};
  user.username = req.query.name;
  user.email = req.query.email;
});
app.post("/create", (req, res) => {
  console.log(req.body);
  let user = {};
  user.username = req.body.name;
  user.email = req.body.email;
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
