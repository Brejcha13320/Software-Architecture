const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const services = {};

app.post("/register", (req, res) => {
  const { name, url } = req.body;
  services[name] = url;
  console.log(`Registered service: ${name} at ${url}`);
  res.send(`Service ${name} registered.`);
});

app.get("/services/:name", (req, res) => {
  const serviceName = req.params.name;
  const serviceUrl = services[serviceName];
  if (serviceUrl) {
    res.json({ url: serviceUrl });
  } else {
    res.status(404).send(`Service ${serviceName} not found.`);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Service registry running on port ${PORT}`);
});
