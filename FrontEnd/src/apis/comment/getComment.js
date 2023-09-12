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
        // const responseReplies = await fetch(
        //   API_COMMENT_GETCOMMENTREPLIES + "/" + comment.id
        // );
        // const responseFromBackEndReplies = await responseReplies.json();

        // if (responseFromBackEndReplies.message === true) {
        //   // Get the Author Name of the replies and store it in the property author
        //   responseFromBackEndReplies.comment.map(async (com, i) => {
        //     const responseAuthorReplies = await GetUser(com.Id_User);
        //     if (responseAuthorReplies.message === true) {
        //       responseFromBackEndReplies.comment[i].author =
        //         responseAuthorReplies.user.name;
        //     }
        //   });
        //   // Store all the replies in the property replies of the object comments
        //   comments[index].replies = responseFromBackEndReplies.comment;
        // }
      });
      return comments;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}

export async function getReplies(idComment) {
  try {
    const response = await fetch(
      API_COMMENT_GETCOMMENTREPLIES + "/" + idComment
    );
    const responseFromBackEnd = await response.json();
    if (responseFromBackEnd.message === true) {
      const replies = responseFromBackEnd.comment;
      // Create an array of promises to fetch authors for each reply
      const authorPromises = replies.map(async (rep) => {
        const responseAuthorReplies = await GetUser(rep.Id_User);
        if (responseAuthorReplies.message === true) {
          rep.author = responseAuthorReplies.user.name;
        }
      });

      // Use Promise.all to wait for all authorPromises to resolve
      await Promise.all(authorPromises);
      return replies;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}
