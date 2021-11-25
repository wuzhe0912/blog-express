const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3002;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post("/bmiCalculator", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height) / 100;
  let heightPow = Math.pow(height, 2);

  const result = weight / heightPow;
  res.send(`<h1>BMI : ${result}</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
