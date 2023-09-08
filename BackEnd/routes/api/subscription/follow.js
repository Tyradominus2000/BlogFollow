const { Router } = require("express");
const router = Router();
const connection = require("../../../database");
router.post("/", async (req, res) => {
  try {
    const { followedId, followerId } = req.body;
    const sql = `INSERT INTO follow Id_UserFollowed, Id_UserFollower VALUES (?, ?)`;
    const values = [followedId, followerId];
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      res.send(true);
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
