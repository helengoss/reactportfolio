import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {page === "home" && <HomePage />}
      {page === "about" && <AboutPage />}
      {page === "portfolio" && <PortfolioPage />}
      {page === "contact" && <ContactPage />}
    </Layout>
  );
}

export default App;