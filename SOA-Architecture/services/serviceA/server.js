const express = require("express");
const axios = require("axios");

const app = express();
const SERVICE_NAME = "serviceA";
const SERVICE_URL = `http://localhost:4000`;

app.get("/serviceA", (req, res) => {
  res.send("Response from Service A");
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

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Service A running on port ${PORT}`);
  registerService();
});
