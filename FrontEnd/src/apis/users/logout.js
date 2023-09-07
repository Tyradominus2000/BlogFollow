const API_USERS_LOGOUT = "/api/users/logout";
export async function Logout() {
  try {
    const response = await fetch(API_USERS_LOGOUT, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    throw error;
  }
}
