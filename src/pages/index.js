import * as React from "react";

// Components
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import MainContainer from "../components/MainContainer/MainContainer";
import AboutProduct from "../components/AboutProduct/AboutProduct";
import ProductList from "../components/ProductList/ProductList";
import Clients from '../components/Clients/Clients'
import Footer from "../components/Footer/Footer"
const IndexPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <MainContainer />
      <AboutProduct />
      <ProductList />
      <Clients />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
