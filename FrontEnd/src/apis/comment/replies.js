const API_COMMENT_REPLIES = "/api/comment/commentReplies";

/**
 *
 * @param {Object} replies
 */
export async function replies(replies) {
  try {
    const response = await fetch(API_COMMENT_REPLIES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(replies),
    });

    const responseFromBackEnd = await response.json();
    if (response.ok) {
      return responseFromBackEnd.message;
    } else {
      return responseFromBackEnd.message;
    }
  } catch (error) {
    throw error;
  }
}
