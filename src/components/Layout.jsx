import NavBar from "./NavBar";
import Footer from "./Footer";
import "./layout.css";

const pages = [
  { name: "Home", key: "home" },
  { name: "Portfolio", key: "portfolio" },
  { name: "Contact", key: "contact" },
];

const Layout = ({ children, selectedPage, onSetPage }) => {
  return (
    <div className="layout-container">
      <NavBar />

      <div className="layout-main">
        <aside className="layout-sidebar">
          <ul>
            {pages.map((page) => (
              <li
                key={page.key}
                onClick={() => onSetPage(page.key)}
                className={page.key === selectedPage ? "selected" : ""}
              >
                {page.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="layout-content">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
