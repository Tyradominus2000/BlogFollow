const route = require("express").Router();

route.get("/", (req, res) => {
  res.send(JSON.stringify("API ONLINE"));
});

module.exports = route;
