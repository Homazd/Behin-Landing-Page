import * as React from "react";

// Components
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import MainContainer from "../components/MainContainer/MainContainer";
import ProductList from "../components/ProductList/ProductList";

// Lazy Loading Components
const WhyChooseUsLazy = React.lazy(() =>
  import("../components/Why/WhyChooseUs")
);
const AboutProductLazy = React.lazy(() =>
  import("../components/AboutProduct/AboutProduct")
);
const FooterLazy = React.lazy(() => import("../components/Footer/Footer"));

const IndexPage = () => {
  const isSSR = typeof window === "undefined";
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
      <ProductList />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <FooterLazy />
        </React.Suspense>
      )}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
