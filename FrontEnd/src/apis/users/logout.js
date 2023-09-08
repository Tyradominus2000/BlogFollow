const API_USERS_LOGOUT = "/api/users/logout";
export async function Logout(setUser) {
  try {
    await fetch(API_USERS_LOGOUT, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    setUser(null);
  } catch (error) {
    throw error;
  }
}
