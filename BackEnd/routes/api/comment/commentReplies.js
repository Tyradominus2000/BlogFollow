const { Router } = require("express");
const connection = require("../../../database");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { description, idComment, idUser } = req.body;
    const sql = `INSERT INTO commentreplies (date, description, Id_Comment, Id_User) VALUE (NOW(), ?, ?, ?)`;
    const values = [description, idComment, idUser];

    connection.query(sql, values, (err, _) => {
      if (err) throw err;
      res.send(JSON.stringify({ message: true }));
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
