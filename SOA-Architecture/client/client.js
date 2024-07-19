const axios = require("axios");

const getServiceUrl = async (serviceName) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/services/${serviceName}`
    );
    return response.data.url;
  } catch (error) {
    console.error(`Error getting URL for service ${serviceName}:`, error);
  }
};

const callService = async (serviceName, endpoint) => {
  const serviceUrl = await getServiceUrl(serviceName);
  if (serviceUrl) {
    try {
      const response = await axios.get(`${serviceUrl}/${endpoint}`);
      console.log(`Response from ${serviceName}:`, response.data);
    } catch (error) {
      console.error(`Error calling ${serviceName}:`, error);
    }
  }
};

(async () => {
  await callService("serviceA", "serviceA");
  await callService("serviceB", "serviceB");
})();
