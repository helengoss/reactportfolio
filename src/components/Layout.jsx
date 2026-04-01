import NavBar from './NavBar';
import Footer from './Footer';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Portfolio', key: 'portfolio' },
  { name: 'Contact', key: 'contact' },
];

const Layout = ({ children, selectedPage, onSetPage }) => {
  const renderPageLinks = () =>
    pages.map(page => (
      <li
        key={page.key}
        style={{
          ...styles.sidebarLink,
          ...(page.key === selectedPage ? styles.selected : {}),
        }}
        onClick={() => onSetPage(page.key)}
      >
        {page.name}
      </li>
    ));

  return (
    <div style={styles.container}>
      <NavBar />
      <div style={styles.main}>
        <aside style={styles.sidebar}>
          <ul>{renderPageLinks()}</ul>
        </aside>
        <section style={styles.content}>{children}</section>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: { display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth: '100vw' },
  selected: { backgroundColor: '#999' },
  main: { display: 'flex', flex: 1 },
  sidebar: { width: '200px', backgroundColor: '#f4f4f4', padding: '5px' },
  content: { flex: 1, padding: '20px' },
  footer: { backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' },
  sidebarLink: { display: 'block', padding: '5px', color: '#333', textDecoration: 'none' },
};

export default Layout;