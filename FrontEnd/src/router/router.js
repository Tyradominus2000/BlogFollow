//Dependance
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Article from "../components/article/Article";
import { ArticleLoader } from "../loaders/Article.loader";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import { AuthLoader } from "../loaders/Auth.loader";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/article/*",
        loader: ArticleLoader,
        element: <Article />,
      },
      {
        path: "/login",
        loader: AuthLoader,
        element: <Login />,
      },
      {
        path: "/register",
        loader: AuthLoader,
        element: <Register />,
      },
    ],
  },
]);
