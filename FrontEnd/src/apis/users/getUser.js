const API_USER_GETUSER = "/api/users/getUser";

export async function GetUser() {
  try {
    const response = await fetch(API_USER_GETUSER, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    const responseFromBackEnd = await response.json();
    return responseFromBackEnd;
  } catch (error) {
    throw error;
  }
}
