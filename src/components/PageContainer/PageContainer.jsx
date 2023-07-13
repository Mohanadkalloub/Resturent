import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const PageContainer = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default PageContainer;
