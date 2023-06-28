import * as React from "react";
import { Link } from "gatsby";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import about from "../images/about-us.png";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen w-80 h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${about})` }}
      >
        About us
      </div>
      <p className="text-gray-500 underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link>
      </p>

      <Footer />
    </>
  );
};

export default AboutPage;
export const Head = () => <title>About us</title>;
