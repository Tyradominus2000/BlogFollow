const API_USER_GETUSER = "/api/users/getUser";

export async function GetUserToken() {
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
export async function GetUser(id) {
  try {
    const response = await fetch(API_USER_GETUSER, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      const responseFromBackEnd = await response.json();
      return responseFromBackEnd;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}
