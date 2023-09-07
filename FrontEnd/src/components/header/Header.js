import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Logout } from "../../apis/users/logout";
export default function Header() {
  return (
    <div className="d-flex justify-content-around container">
      <p>MonBlog</p>
      <NavLink to={"/login"}>
        <p>Login</p>
      </NavLink>
      <button onClick={Logout}>LOGOUT</button>
    </div>
  );
}
