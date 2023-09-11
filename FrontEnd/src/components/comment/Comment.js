import { useEffect, useState } from "react";
import "./Comment.scss";

export default function Comment({ comment, commentReplies, loading }) {
  // console.log("comment : ", comment);
  console.log("commentReplies : ", commentReplies);

  return (
    <div className="commentContainer">
      {comment ? (
        <div>
          <div className="comment">
            <div className="commentTitle">{comment.title}</div>
            <div className="commentAuthor">{comment.author}</div>
            <div className="commentDate">{comment.date}</div>
            <div className="commentDescription">{comment.description}</div>
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
