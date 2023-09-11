import { useEffect, useState } from "react";
import { ArticleContext } from "../../context/Article.context";
import { getArticle } from "../../apis/articles/getArticle";

export default function ArticleProvider({ children }) {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    async function Article() {
      const articlesBack = await getArticle();
      setArticles(articlesBack.article);
    }

    Article();
  }, []);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
}
