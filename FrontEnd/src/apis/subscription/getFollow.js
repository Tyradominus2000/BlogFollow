const API_SUBSCRIPTION_GETFOLLOW = "/api/subscription/getFollow/";
/**
 *
 * @param {Number} id
 * @returns {Object}
 */
export async function getFollow(id) {
  try {
    const response = await fetch(API_SUBSCRIPTION_GETFOLLOW + id);
    const responseFromBackEnd = await response.json();
    console.log(responseFromBackEnd);
    return responseFromBackEnd;
  } catch (error) {
    throw error;
  }
}
