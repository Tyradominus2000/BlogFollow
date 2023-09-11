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
    res.status(500).send(JSON.stringify({ message: error.message }));
  }
});

router.get("/:id", async (req, res) => {
  try {
    const idComment = req.params.id;
    const sql = `SELECT * FROM commentreplies WHERE Id_Comment = "${idComment}"`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send(JSON.stringify({ message: true, comment: result }));
      } else {
        res.send(JSON.stringify({ message: false }));
      }
    });
  } catch (error) {
    res.status(500).send(JSON.stringify({ message: error.message }));
  }
});

module.exports = router;
