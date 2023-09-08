const API_SUBSCRIPTION_FOLLOW = "/api/subscription/follow";

export async function follow(idFollower, idFollowed) {
  try {
    const response = await fetch(API_SUBSCRIPTION_FOLLOW, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ followedId: idFollowed, followerId: idFollower }),
    });
    const responseFromBackEnd = await response.json();
    return responseFromBackEnd;
  } catch (error) {
    throw error;
  }
}
