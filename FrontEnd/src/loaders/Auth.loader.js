import { redirect } from "react-router-dom";

export async function AuthLoader() {
  function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  }

  const token = getCookie("token");

  if (token) {
    return redirect("/");
  } else {
    return true;
  }
}
