import * as React from "react";
import { Link } from "gatsby";
// Components
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <p className="text-gray-300 underline mt-[20px] pl-[15px]">
        <Link to="/">Home</Link>
      </p>
      <div className="px-[15px]">
        <h1 className="font-bold mb-[30px] mt-[30px] text-[22px]">
          BBDH Iran Branch
        </h1>
        <div className="grid grid-cols-4 gap-1 mb-[33px] font-semibold">
          <div className="col-start-2 col-span-1 text-[12px]">Address:</div>
          <div className="col-span-2 text-[12px]">Tehran, Iran</div>
        </div>
        <div className="grid grid-cols-4 gap-1 font-semibold">
          <div className="col-start-2 col-span-1 mb-[33px] text-[12px]">Phone:</div>
          <div className="col-span-2 text-[12px]">+98 21 3310 4958</div>
        </div>
        <div className="grid grid-cols-4 gap-1 font-semibold">
          <div className="col-start-2 col-span-1 mb-[33px] text-[12px]">Email:</div>
          <div className="col-span-2 underline text-blue-400 text-[12px]">sales@bbdh.com</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
export const Head = () => <title>Contact us</title>;
