import Footer from "./Footer";
import Header from "./Header";
import LeftPanel from "./LeftPanel";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <div style={{ display: "flex"}}>
      <LeftPanel style={{ width: '50%' }}  />
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
