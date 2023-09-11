import { GetUser } from "../users/getUser";

const API_COMMENT_GETARTICLECOMMENT = "/api/comment/comment";
const API_COMMENT_GETCOMMENTREPLIES = "/api/comment/commentReplies";

export async function getComment(idArticle) {
  try {
    // Get all the comment
    const responseComment = await fetch(
      API_COMMENT_GETARTICLECOMMENT + "/" + idArticle
    );
    const responseFromBackEnd = await responseComment.json();
    if (responseFromBackEnd.message === true) {
      const comments = responseFromBackEnd.comment;
      // Loops in comments to get all the replies to that comment
      comments.map(async (comment, index) => {
        // Get the Author Name of the comment and store it in the property author
        const responseAuthor = await GetUser(comment.Id_User);
        if (responseAuthor.message === true) {
          comments[index].author = responseAuthor.user.name;
        }

        // If there is a replies to that comment store it in property replies of the comment at the desire index
        const responseReplies = await fetch(
          API_COMMENT_GETCOMMENTREPLIES + "/" + comment.id
        );
        const responseFromBackEndReplies = await responseReplies.json();

        if (responseFromBackEndReplies.message === true) {
          // Get the Author Name of the replies and store it in the property author
          responseFromBackEndReplies.comment.map(async (com) => {
            const responseAuthorReplies = await GetUser(com.Id_User);
            if (responseAuthorReplies.message === true) {
              responseFromBackEndReplies.comment[index].author =
                responseAuthorReplies.user.name;
            }
          });
          // Store all the replies in the property replies of the object comments
          comments[index].replies = responseFromBackEndReplies.comment;
        }
      });
      return comments;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}
