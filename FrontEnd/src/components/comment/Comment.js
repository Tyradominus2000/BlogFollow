export default function Comment({ comment, commentReplies }) {
  return (
    <div className="commentContainer">
      {comment ? (
        <div>
          {comment.map((com) => (
            <div className="comment">
              <div className="commentTitle">{com.title}</div>
              <div className="commentAuthor">{com.author}</div>
              <div className="commentDate">{com.date}</div>
              <div className="commentDescription">{com.description}</div>
              {commentReplies ? (
                <div>
                  {commentReplies.map((rep) => (
                    <div className="commentReplies">
                      <div className="commentAuthor">{rep.author}</div>
                      <div className="commentDate">{rep.date}</div>
                      <div className="commentDescription">
                        {rep.description}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
