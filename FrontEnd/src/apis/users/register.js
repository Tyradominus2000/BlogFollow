const API_USERS_REGISTER = "/api/users/register";

export async function RegisterUser(users) {
  try {
    const response = await fetch(API_USERS_REGISTER, {
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
