import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Logout } from "../../apis/users/logout";
import { useContext } from "react";
import { UserContext } from "../../context/User.context";
import { SubscriptionContext } from "../../context/Subscription.context";
export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const { follow } = useContext(SubscriptionContext);

  return (
    <div className="d-flex justify-content-around container">
      <NavLink to={"../"}>
        <p>MonBlog</p>
      </NavLink>
      {user ? (
        <>
          {follow && follow.length > 0 ? (
            <NavLink className={`d-flex align-items-center`} to={"/follow"}>
              <button className="btnFollow">Follow</button>
            </NavLink>
          ) : (
            <></>
          )}
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
