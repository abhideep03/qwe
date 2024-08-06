import { React } from "react";
import Header from "./Header";
import Hero from "./hero";
import Main from "./main";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import "../App.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Layout;
