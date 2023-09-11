import { useEffect, useState } from "react";
import { CommentContext } from "../../context/Comment.context";
import { getComment } from "../../apis/comment/getComment";

export default function CommentProvider({ children }) {
  const [idArticle, setIdArticle] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    console.log("IdArticle : ", idArticle);
    async function setCommentWithId() {
      console.log("InCommentWithId");
      const response = await getComment(idArticle);
      if (response !== false) {
        setComments(response);
      } else {
        setComments(null);
      }
    }

    setCommentWithId();
  }, [idArticle]);

  return (
    <CommentContext.Provider value={{ comments, setComments, setIdArticle }}>
      {children}
    </CommentContext.Provider>
  );
}
