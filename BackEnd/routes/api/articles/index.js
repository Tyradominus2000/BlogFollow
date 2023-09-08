const route = require("express").Router();

const apiGetArticle = require("./getArticle");

route.use("/getArticle", apiGetArticle);

route.get("/", async (req, res) => {
  try {
    res.send(JSON.stringify("ARTICLE WORKING"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;
