import { useContext, useEffect } from "react";
import "./Article.scss";
import { ArticleContext } from "../../context/Article.context";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../context/User.context";
import { SubscriptionContext } from "../../context/Subscription.context";
import { setUnfollow } from "../../apis/subscription/unfollow";

export default function Article() {
  const { articles } = useContext(ArticleContext);
  const { user } = useContext(UserContext);
  const { follow } = useContext(SubscriptionContext);
  const queryParams = useLoaderData();
  let article;

  if (articles) {
    article = getObjectById(articles, queryParams);
  }

  useEffect(() => {
    if (article && follow) {
      const buttonFollowElement = document.querySelector(".buttonFollow");
      if (buttonFollowElement) {
        if (follow.includes(article.Id_User)) {
          buttonFollowElement.classList.add("follow");
          console.log("follow");
        } else {
          console.log("unfollow");
          buttonFollowElement.classList.add("unfollow");
        }
      }
    }
  }, [follow, article]);
  function getObjectById(array, id) {
    console.log(array, id);
    const result = array.find((obj) => obj.id === parseInt(id));
    return result ? result : false;
  }

  async function SetFollow(target) {
    if (target.className.includes("unfollow")) {
      target.className = target.className.replace("unfollow", "follow");
    } else if (target.className.includes("follow")) {
      const response = await setUnfollow(user.Id, article.Id_User);
      if (response === true) {
        target.className = target.className.replace("follow", "unfollow");
      }
    }
  }

  return (
    <div className="ArticleContainer d-flex flex-column">
      {article ? (
        <>
          <div className="d-flex justify-content-around title">
            <h2>{article.title}</h2>
            {user ? (
              user.Id !== article.Id_User && (
                <h4
                  id="follow"
                  className="buttonFollow"
                  onClick={(event) => SetFollow(event.target)}
                >
                  Follow
                </h4>
              )
            ) : (
              <></>
            )}
          </div>
          <div className="image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="description">
            <p>{article.description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex title">
            <h2>Article doesn't exist</h2>
          </div>
        </>
      )}
    </div>
  );
}
