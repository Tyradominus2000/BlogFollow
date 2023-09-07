import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-between ${styles.appContainer}`}
    >
      <Header />
      <div className="d-flex flex-fill">
        <Suspense fallback={<h1>Chargement en cours...;</h1>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
