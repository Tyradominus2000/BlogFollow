const route = require("express").Router();

const apiUsers = require("./users");
const apiArticle = require("./articles");
const apiSubscription = require("./subscription");
const apiComment = require("./comment");

route.use("/users", apiUsers);
route.use("/article", apiArticle);
route.use("/subscription", apiSubscription);
route.use("/comment", apiComment);
route.get("/", async (_, res) => {
  try {
    res.send(JSON.stringify("API WORKING"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;
