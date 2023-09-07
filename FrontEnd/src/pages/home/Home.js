import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <NavLink to={`/article?id=1`}>
        <p>Article</p>
      </NavLink>
    </div>
  );
}
