import { useContext, useEffect, useState } from "react";
import "./Article.scss";
import { ArticleContext } from "../../context/Article.context";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../context/User.context";
import { SubscriptionContext } from "../../context/Subscription.context";
import { setUnfollow } from "../../apis/subscription/unfollow";
import { setFollowAPI } from "../../apis/subscription/follow";
import { GetUser } from "../../apis/users/getUser";
import { getFollow } from "../../apis/subscription/getFollow";

export default function Article() {
  const [author, setAuthor] = useState(null);
  const { articles } = useContext(ArticleContext);
  const { user } = useContext(UserContext);
  const { follow, setFollow } = useContext(SubscriptionContext);
  const queryParams = useLoaderData();
  let article;
  /**
   *
   * @param {Array.<Object>} array
   * @param {Number} id
   * @returns {Object} containing only the article with the selected id
   */
  function getObjectById(array, id) {
    const result = array.find((obj) => obj.id === parseInt(id));
    return result ? result : false;
  }

  useEffect(() => {
    async function setAuthorFunction() {
      if (article) {
        const response = await GetUser(article.Id_User);
        if (response.message === true) {
          setAuthor(response.user);
        }
      }
    }
    setAuthorFunction();
  }, [article]);
  useEffect(() => {
    if (article && follow) {
      const buttonFollowElement = document.querySelector(".buttonFollow");
      if (buttonFollowElement) {
        if (follow.includes(article.Id_User)) {
          buttonFollowElement.classList.add("follow");
          buttonFollowElement.classList.remove("unfollow");
        } else {
          buttonFollowElement.classList.add("unfollow");
          buttonFollowElement.classList.remove("follow");
        }
      }
    }
  }, [follow, article]);

  if (articles) {
    article = getObjectById(articles, queryParams);
  }

  /**
   *
   * @param {HTMLElement} target
   */
  async function SetFollow(target) {
    if (target.className.includes("unfollow")) {
      const response = await setFollowAPI(user.Id, article.Id_User);
      if (response.message === true) {
        setFollow(await getFollow(user.Id));
        alert("Succesfully follow");
      }
    } else if (target.className.includes("follow")) {
      const response = await setUnfollow(user.Id, article.Id_User);
      if (response.message === true) {
        setFollow(await getFollow(user.Id));
        alert("Succesfully unfollow");
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
          <div className="author">
            <p>{author && "Auteur : " + author.name}</p>
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
