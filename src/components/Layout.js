import Footer from "./Footer";

const Layout = ({ children, news, media, categories }) => {
  return (
    <div className="h-full w-full backdrop-blur-md bg-white container">
            
      <div className="">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;