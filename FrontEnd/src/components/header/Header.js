import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Logout } from "../../apis/users/logout";
import { useContext } from "react";
import { UserContext } from "../../context/User.context";
export default function Header() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="d-flex justify-content-around container">
      <NavLink to={"../"}>
        <p>MonBlog</p>
      </NavLink>
      {user ? (
        <>
          <button className="btnFollow">Follow</button>
          <button onClick={() => Logout(setUser)}>LOGOUT</button>
        </>
      ) : (
        <NavLink to={"/login"}>
          <p>Login</p>
        </NavLink>
      )}
    </div>
  );
}
