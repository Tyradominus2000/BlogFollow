const API_SUBSCRIPTION_UNFOLLOW = "/api/subscription/unfollow";

export async function setUnfollow(idFollower, idFollowed) {
  try {
    const response = await fetch(
      API_SUBSCRIPTION_UNFOLLOW + "/" + idFollower + "/" + idFollowed,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseFromBackEnd = await response.json();
    return responseFromBackEnd;
  } catch (error) {
    throw error;
  }
}
