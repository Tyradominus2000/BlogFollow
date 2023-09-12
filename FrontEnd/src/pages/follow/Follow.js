import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ArticleContext } from "../../context/Article.context";
import { SubscriptionContext } from "../../context/Subscription.context";
export default function Follow() {
  const { articles } = useContext(ArticleContext);
  const { follow } = useContext(SubscriptionContext);

  return (
    <div>
      <p>Liste des Articles d'auteur Follow</p>
      <ul>
        {articles && follow ? (
          articles.map((article, i) => (
            <div key={article.id}>
              {follow.includes(article.Id_User) ? (
                <NavLink to={`/article?id=${article.id}`}>
                  <li className="d-flex article_items">
                    <img
                      className="HomeImg"
                      src={article.image}
                      alt={article.title}
                    />
                    <h3 className="d-flex align-items-center titleHome">
                      {article.title}
                    </h3>
                  </li>
                </NavLink>
              ) : (
                <></>
              )}
            </div>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
