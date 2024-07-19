const express = require("express");
const axios = require("axios");

const app = express();
const SERVICE_NAME = "serviceB";
const SERVICE_URL = `http://localhost:5000`;

app.get("/serviceB", (req, res) => {
  res.send("Response from Service B");
});

const registerService = async () => {
  try {
    await axios.post("http://localhost:3000/register", {
      name: SERVICE_NAME,
      url: SERVICE_URL,
    });
  } catch (error) {
    console.error("Error registering service:", error);
  }
};

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Service B running on port ${PORT}`);
  registerService();
});
