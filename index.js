const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

console.log("In index.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, './public')));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
