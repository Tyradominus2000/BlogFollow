import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Test</p>
      <NavLink to={`/article?id=1`}>
        <p>Article</p>
      </NavLink>
      <NavLink to={`/login`}>
        <p>Login</p>
      </NavLink>
    </div>
  );
}
