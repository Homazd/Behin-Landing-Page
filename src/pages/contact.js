import * as React from "react";
import { Link } from "gatsby";
// Components
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import location from "../images/location.png";

const ContactPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <p className="text-gray-300 underline mt-[20px] pl-[15px]">
        <Link to="/">Home</Link>
      </p>
      <div className="px-[15px]">
        <h1 className="font-medium mb-[30px] mt-[30px] text-[22px]">
          BBDH Iran Branch
        </h1>
        <div className="grid grid-cols-4 gap-1 mb-[33px] content-center">
          <Link to="/">
            <img
              src={location}
              alt="location"
              className="col-span-1 w-[30px] h-[30px] text-blue-400 justify-self-center"
            />
          </Link>
          <div className="col-span-1 text-[12px] ">Address:</div>
          <div className="col-span-2 text-[12px]">
            No.68, Second Floor, Elm va San'at St., Hengam St.,Tehran, Iran
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          <div className="col-start-2 col-span-1 mb-[33px] text-[12px]">
            Phone:
          </div>
          <div className="col-span-2 text-[12px]">+98 21 3523 8535</div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          <div className="col-start-2 col-span-1 mb-[33px] text-[12px]">
            Email:
          </div>
          <div className="col-span-2 underline text-blue-400 text-[12px]">
            sales@bbdh.com
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
export const Head = () => <title>Contact us</title>;
