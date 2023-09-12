import { useEffect, useState } from "react";
import { CommentContext } from "../../context/Comment.context";
import { getComment, getReplies } from "../../apis/comment/getComment";
import { comment } from "../../apis/comment/comment";
import { replies } from "../../apis/comment/replies";

export default function CommentProvider({ children }) {
  const [idArticle, setIdArticle] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  async function setCommentWithId() {
    setLoading(true);
    const commentData = await getComment(idArticle);
    if (commentData !== false) {
      const commentWithReplies = await Promise.all(
        commentData.map(async (com) => {
          const replies = await getReplies(com.id);
          if (replies !== false) {
            com.replies = replies;
          }
          return com;
        })
      );
      setComments(commentWithReplies);
    } else {
      setComments(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (idArticle !== null) {
      setCommentWithId();
    }
    // eslint-disable-next-line
  }, [idArticle]);

  async function sendComment(IsComment, Comment) {
    const response = IsComment
      ? await comment(Comment)
      : await replies(Comment);
    if (response === true) {
      await setCommentWithId();
      return true;
    } else {
      return response;
    }
  }

  return (
    <CommentContext.Provider
      value={{ comments, setComments, setIdArticle, loading, sendComment }}
    >
      {children}
    </CommentContext.Provider>
  );
}
