import { redirect } from "react-router-dom";

export async function ArticleLoader({ request }) {
  const queryParams = new URL(request.url).searchParams.get("id");
  console.log(queryParams);
  if (queryParams) {
    return true;
  } else {
    return redirect("../");
  }
}
