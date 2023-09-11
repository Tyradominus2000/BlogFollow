const API_SUBSCRIPTION_FOLLOW = "/api/subscription/follow";
/**
 *
 * @param {Number} idFollower
 * @param {Number} idFollowed
 * @returns {Object.<Boolean>}
 */
export async function setFollowAPI(idFollower, idFollowed) {
  try {
    const response = await fetch(
      API_SUBSCRIPTION_FOLLOW + "/" + idFollower + "/" + idFollowed
    );
    const responseFromBackEnd = await response.json();
    return responseFromBackEnd;
  } catch (error) {
    throw error;
  }
}
