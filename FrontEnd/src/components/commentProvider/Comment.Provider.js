import { useEffect, useState } from "react";
import { CommentContext } from "../../context/Comment.context";
import { getComment } from "../../apis/comment/getComment";

export default function CommentProvider({ children }) {
  const [idArticle, setIdArticle] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setCommentWithId() {
      setLoading(true);
      const response = await getComment(idArticle);
      if (response !== false) {
        setComments(response);
      } else {
        setComments(null);
      }
      setLoading(false);
    }
    if (idArticle !== null) {
      setCommentWithId();
    }
  }, [idArticle]);

  useEffect(() => {
    console.log("comments in Provider : ", comments);
  }, [comments]);
  useEffect(() => {
    console.log("Loading in Provider : ", loading);
  }, [loading]);

  return (
    <CommentContext.Provider
      value={{ comments, setComments, setIdArticle, loading }}
    >
      {children}
    </CommentContext.Provider>
  );
}
