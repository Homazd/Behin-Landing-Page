import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";
import fiveGC from "../../images/5GC-FieldProven.png";

const EPC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        Products
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/products/">Products</Link> /{" "}
        <Link to="/products/EPC">EPC</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1100px] mx-auto mt-5 place-content-center grid tablet:grid-cols-2 gap-4">
        <div className="col-span-1 grid place-content-center">
          <h1 className="font-bold text-[14px] tablet:text-[18px] mt-6 laptop:text-[30px] p-2">
            EPC
          </h1>
          <span className="text-gray-500">Fully virtualized EPC, Easy Depoloyment & Management</span>
          <span className="text-[12px] mt-4 laptop:text-[14px] desktop:text-[18px] leading-loose">
            EPC stands for Evolved Packet Core. It is the core network
            architecture used in 4G LTE (Long-Term Evolution) wireless
            communication systems. The EPC provides the essential
            functionalities and services needed for the operation of LTE
            networks. It consists of several network elements, including the
            Serving Gateway (SGW), Packet Data Network Gateway (PGW), Mobility
            Management Entity (MME), and Home Subscriber Server (HSS). These
            components work together to facilitate packet-switched data
            communication, mobility management, session establishment, and other
            important functions within the LTE network. The EPC is responsible
            for handling user data, managing connectivity, and ensuring smooth
            communication between the mobile devices and external networks, such
            as the internet.
          </span>
        </div>
        <div className="col-span-1 grid place-content-center">
          <img
            className="w-[400px] h-auto border-solid border-4 border-sky-500"
            src={fiveGC}
            alt="5GC core"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EPC;