import * as React from "react";
import { Link } from "gatsby";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
// Images
import about from "../images/about-us.png";
import fiveGMillimeter from "../images/5g-millimetrique-france.png";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${about})` }}
      >
        About us
      </div>
      <p className="text-gray-500 underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center grid tablet:grid-cols-2 gap-4">
        <div className="col-span-1 grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Who we are
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose">
            SIZ-Tel is a Software company, where we strive to
            provide our customers with the best possible communication
            solutions. We are a young and dynamic company, established in 2022,
            and have already made significant progress in the industry. We offer
            a wide range of services, including 2G, 4G, 5G, VoLTE, and EPC, that
            cater to the needs of individuals and businesses alike. We
            understand the importance of staying connected in today's fast-paced
            world, and we strive to make it easier for our customers to do so.
          </span>
        </div>
        <div className="col-span-1 content-center mt-14 flex justify-center">
          <img
            className="w-[400px] h-auto laptop:h-[280px]"
            src={fiveGMillimeter}
            alt="5GC core"
          />
        </div>
      </div>
      <div className="mt-[34px] tablet:mt-12 grid content-center px-[15px] tablet:w-[670px] desktop:w-[1200px] tablet:mx-auto">
        <div className="text-[23px] desktop:text-[46px] flex justify-center font-bold text-blue-600">
          Our mission
        </div>
        <div className="mt-[20px] text-center text-[12px] desktop:text-[20px]">
          to provide cutting-edge technology and exceptional customer service to
          ensure our customers stay connected. SIZ-Tel is
          committed to evolve your network and support your revenue growth.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
export const Head = () => <title>About us</title>;
