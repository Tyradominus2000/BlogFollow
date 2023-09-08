const { Router } = require("express");
const router = Router();

const apiFollow = require("./follow");
const apiUnfollow = require("./unfollow");
const apiGetFollow = require("./getFollow");

router.use("/follow", apiFollow);
router.use("/unfollow", apiUnfollow);
router.use("/getFollow", apiGetFollow);

router.get("/", (req, res) => {
  res.send(JSON.stringify("SUBSCRIPTION WORKING"));
});

module.exports = router;
