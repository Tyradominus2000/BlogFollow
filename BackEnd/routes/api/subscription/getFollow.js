const { Router } = require("express");
const connection = require("../../../database");
const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const sql = `SELECT * FROM follow WHERE id_UserFollower = "${id}"`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      const sendBack = [];
      result.map((r, i) => (sendBack[i] = r.Id_UserFollowed));
      res.send(JSON.stringify(sendBack));
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
