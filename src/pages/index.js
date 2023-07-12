import * as React from "react";
import { useState, useEffect } from "react";

// Components
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import MainContainer from "../components/MainContainer/MainContainer";
import ProductList from "../components/ProductList/ProductList";
import Build5G from "../components/Build5G/Build5G";

// Antd Components
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

// Lazy Loading Components
const WhyChooseUsLazy = React.lazy(() =>
  import("../components/WhyChooseUs/WhyChooseUs")
);
const AboutProductLazy = React.lazy(() =>
  import("../components/AboutProduct/AboutProduct")
);
const FooterLazy = React.lazy(() => import("../components/Footer/Footer"));

const IndexPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  /* check whether the component is Server side rendered, because code could break if executed without the isSSR guard */
  const isSSR = typeof window === "undefined";

  useEffect(() => {
    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the window's scroll distance
    const scrollY = window.scrollY;

    // Show the button if the user has scrolled down, hide it otherwise
    if (scrollY > 5000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <MainContainer />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <AboutProductLazy />
        </React.Suspense>
      )}
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <WhyChooseUsLazy />
        </React.Suspense>
      )}
      <Build5G />
      <ProductList />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <FooterLazy />
        </React.Suspense>
      )}
      <BackTop>
        <div className="bg-gray-500 rounded-full text-center hover:shadow-xl">
          <ArrowUpOutlined className="text-white text-4xl" />
        </div>
      </BackTop>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
