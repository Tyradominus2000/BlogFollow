const API_COMMENT_COMMENT = "/api/comment/comment";

/**
 *
 * @param {Object} comment
 */
export async function comment(comment) {
  try {
    const response = await fetch(API_COMMENT_COMMENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
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
