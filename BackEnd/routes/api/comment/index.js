const { Router } = require("express");
const router = Router();

const apiComment = require("./comment");
const apiCommentReplies = require("./commentReplies");

router.use("/comment", apiComment);
router.use("/commentReplies", apiCommentReplies);

module.exports = router;
