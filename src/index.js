const express = require("express");
const app = express();

const PORT = 3002;

app.get("/", (req, res) => {
  res.send(`<h1>Hello Node.js!</h1>`);
});

app.get("/home", (req, res) => {
  res.send(`<h1>This is Homepage.</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
