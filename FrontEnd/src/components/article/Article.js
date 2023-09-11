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
import { CommentContext } from "../../context/Comment.context";
import Comment from "../comment/Comment";

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}
export default function Article() {
  const [author, setAuthor] = useState(null);
  const [article, setArticle] = useState(null);
  const [showComment, setShowComment] = useState(false);
  const { articles } = useContext(ArticleContext);
  const { comments, setIdArticle, loading } = useContext(CommentContext);
  const { follow, setFollow } = useContext(SubscriptionContext);
  const { user } = useContext(UserContext);
  const queryParams = useLoaderData();

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    forceUpdate();
  }, [loading, articles]);

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
    if (articles) {
      setArticle(getObjectById(articles, queryParams));
    }
  }, [articles, queryParams]);

  useEffect(() => {
    console.log("comment in Article ", comments);
  }, [comments]);

  // Get author and comment
  useEffect(() => {
    if (article) {
      setAuthorFunction();
      console.log("im changing id");
      setIdArticle(article.id);
    }
    async function setAuthorFunction() {
      const response = await GetUser(article.Id_User);
      if (response.message === true) {
        setAuthor(response.user);
      }
    }
  }, [article]);

  // Handle the follow and unfollow
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
    <div className="ArticleContainer d-flex flex-fill flex-column">
      {article ? (
        <>
          <div className="Article">
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
            <div className="image d-flex flex-fill justify-content-center">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="description">
              <p>{article.description}</p>
            </div>
          </div>
          <button
            onClick={() => {
              forceUpdate();
              setShowComment(true);
            }}
          >
            Show Comment
          </button>
          {!loading ? (
            showComment &&
            comments &&
            comments.map((com) => (
              <Comment
                comment={com}
                commentReplies={com.replies}
                loading={loading}
                key={com.id}
              />
            ))
          ) : (
            <p>loading...</p>
          )}
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
