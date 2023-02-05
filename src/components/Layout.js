import Footer from "./Footer";
// import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full backdrop-blur-md bg-white container">
      {/* <Header categories={categories} /> */}

      <div className="">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
