import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserProvider from "./components/userProvider/User.Provider";
import ArticleProvider from "./components/articleProvider/Article.Provider";
import SubscriptionProvider from "./components/subscriptionProvider/Subscription.provider";
import CommentProvider from "./components/commentProvider/Comment.Provider";

function App() {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-between ${styles.appContainer}`}
    >
      <UserProvider>
        <ArticleProvider>
          <SubscriptionProvider>
            <Header />
            <div className="d-flex flex-fill">
              <CommentProvider>
                <Suspense fallback={<h1>Chargement en cours...;</h1>}>
                  <Outlet />
                </Suspense>
              </CommentProvider>
            </div>
            <Footer />
          </SubscriptionProvider>
        </ArticleProvider>
      </UserProvider>
    </div>
  );
}

export default App;
