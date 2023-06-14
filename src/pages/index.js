import * as React from "react";
// Components
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero"

const IndexPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
