const API_ARTICLE_GETARTICLE = "/api/article/getArticle";

export async function getArticle() {
  try {
    const response = await fetch(API_ARTICLE_GETARTICLE, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseFromBackEnd = await response.json();

    return responseFromBackEnd;
  } catch (error) {
    throw error;
  }
}
