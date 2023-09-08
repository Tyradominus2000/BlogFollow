import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Logout } from "../../apis/users/logout";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <div className="d-flex justify-content-around container">
      <p>MonBlog</p>
      {user ? (
        <button onClick={Logout}>LOGOUT</button>
      ) : (
        <NavLink to={"/login"}>
          <p>Login</p>
        </NavLink>
      )}
    </div>
  );
}
