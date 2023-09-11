const { Router } = require("express");
const connection = require("../../../database");
const router = Router();
router.delete("/:idFollower/:idFollowed", async (req, res) => {
  try {
    const idFollower = req.params.idFollower;
    const idFollowed = req.params.idFollowed;

    console.log(idFollower, idFollowed);
    const sql = `DELETE FROM follow WHERE Id_UserFollowed = "${idFollowed}" AND Id_UserFollower = "${idFollower}"`;
    connection.query(sql, (err, _) => {
      if (err) throw err;
      res.send({ message: true });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
