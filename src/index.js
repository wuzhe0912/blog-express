const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3002;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.get("/weather", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=taipei&appid=7626871ca74fa6ff38a6cb5ff05a6dc8";

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const { temp } = weatherData.main;
      const { description } = weatherData.weather[0];
      console.log(temp);
      console.log(description);
    });
  });

  res.sendFile(`${__dirname}/weather.html`);
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
