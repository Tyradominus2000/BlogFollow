const route = require("express").Router();

route.delete("/", async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: false,
      sameSite: "none",
      secure: true,
    });
    console.log("Logout");
    res.end();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;
