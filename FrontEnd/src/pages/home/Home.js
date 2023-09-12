import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ArticleContext } from "../../context/Article.context";
import "./Home.scss";
export default function Home() {
  const { articles } = useContext(ArticleContext);
  return (
    <div>
      <p>Liste des Articles</p>
      <ul>
        {articles ? (
          articles.map((article) => (
            <NavLink key={article.id} to={`/article?id=${article.id}`}>
              <li className="d-flex article_items">
                <div className="HomeImg d-flex justify-content-center align-items-center">
                  <img src={article.image} alt={article.title} />
                </div>
                <h3 className="d-flex align-items-center titleHome">
                  {article.title}
                </h3>
              </li>
            </NavLink>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
