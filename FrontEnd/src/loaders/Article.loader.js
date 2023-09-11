import { redirect } from "react-router-dom";

export async function ArticleLoader({ request }) {
  const queryParams = new URL(request.url).searchParams.get("id");
  if (queryParams) {
    return queryParams;
  } else {
    return redirect("../");
  }
}
