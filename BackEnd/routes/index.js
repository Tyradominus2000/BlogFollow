const route = require("express").Router();

const apiRoute = require("./api");

route.use("/api", apiRoute);

route.get("/", async (req, res) => {
  try {
    res.send(JSON.stringify("BACKEND Operational try /api"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;
