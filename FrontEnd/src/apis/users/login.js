const API_USERS_LOGIN = "/api/users/login";

export async function LoginUser(users) {
  try {
    const response = await fetch(API_USERS_LOGIN, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(users),
    });

    const responseFromBackEnd = await response.json();

    return responseFromBackEnd;
  } catch (error) {
    throw error;
  }
}
