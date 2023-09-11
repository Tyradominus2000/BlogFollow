const { Router } = require("express");
const connection = require("../../../database");
const router = Router();
router.get("/:idFollower/:idFollowed", async (req, res) => {
  try {
    const idFollower = req.params.idFollower;
    const idFollowed = req.params.idFollowed;

    console.log(idFollower, idFollowed);
    const sql = `INSERT INTO follow (Id_UserFollowed, Id_UserFollower) VALUES (? , ?) `;
    const values = [idFollowed, idFollower];
    connection.query(sql, values, (err, _) => {
      if (err) throw err;
      res.send({ message: true });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
