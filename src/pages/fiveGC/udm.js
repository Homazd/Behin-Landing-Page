import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const UDMPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen w-80 h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        5GC
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/fiveGC/">5GC</Link> /{" "}
        <Link to="/fiveGC/udm">UDM</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            UDM
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            Unified Data Management (UDM) refers to the practice of integrating
            and managing data from disparate sources in a unified manner. This
            involves creating a single view of data that can be accessed and
            analyzed across an entire organization, regardless of where the data
            is stored or how it was generated. The goal of UDM is to provide a
            comprehensive, accurate, and consistent view of data that can be
            used to make informed business decisions. By integrating data from
            various sources, UDM can help organizations avoid data silos and
            improve data quality, while also reducing the time and effort
            required to access and analyze data. UDM typically involves the use
            of various technologies, such as data integration tools, data
            warehouses, and master data management systems, to help
            organizations create a single, unified view of their data. This can
            be particularly important in large organizations where data is
            generated and stored in multiple locations and formats.
          </span>
        </div>
        {/* <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
          <img className="w-auto h-[400px]" src={imsCore} alt="5GC core" />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default UDMPage;
export const Head = () => <title>UDM</title>;
