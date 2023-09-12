import { useState } from "react";
import "./Comment.scss";
import PopUpComment from "../popUpComment/PopUpComment";

export default function Comment({
  user,
  comment,
  commentReplies,
  sendComment,
}) {
  const [showPopUpComment, setShowPopUpComment] = useState(false);

  return (
    <div className="commentContainer">
      {comment ? (
        <div>
          <div className="comment">
            <div className="commentTitle">{comment.title}</div>
            <div className="commentAuthor">{comment.author}</div>
            <div className="commentDate">{comment.date}</div>
            <div className="commentDescription">{comment.description}</div>
            <div className="d-flex justify-content-end">
              {user && (
                <p
                  className="sendReplieComment"
                  onClick={() => setShowPopUpComment(true)}
                >
                  Send replies
                </p>
              )}
            </div>
            {showPopUpComment && (
              <PopUpComment
                setVisible={setShowPopUpComment}
                sendComment={sendComment}
                IsComment={false}
                commentName={comment.title}
                id={comment.id}
                idUser={user && user.Id}
              />
            )}
            {commentReplies ? (
              <div>
                {commentReplies.map((rep) => (
                  <div className="commentReplies" key={rep.id}>
                    <div className="commentAuthor">{rep.author}</div>
                    <div className="commentDate">{rep.date}</div>
                    <div className="commentDescription">{rep.description}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="commentReplies">
                <p>No replies</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
