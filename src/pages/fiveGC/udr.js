import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const UDRPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        5GC
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/products/">5GC</Link> /{" "}
        <Link to="/fiveGC/udr">UDR</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            UDR
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[22px] leading-loose text-justify">
            Unified Data Repository (UDR) is a centralized repository that is
            designed to store and manage data from multiple sources in a unified
            manner. It is similar to Unified Data Management (UDM), but it
            specifically refers to the storage and management of data in a
            repository. A UDR is typically used in large organizations that have
            a lot of data from multiple sources and need to manage it all in one
            place. It provides a single point of access to all the data, making
            it easier to manage and analyze. The UDR can store different types
            of data, such as structured and unstructured data, and it can be
            used to support various data-related activities, such as data
            integration, data warehousing, and data analytics. In order to
            create a UDR, organizations need to use a combination of
            technologies and tools, including data integration tools, data
            modeling tools, and data governance tools. The data in the UDR is
            typically stored in a standardized format, which makes it easier to
            analyze and use.
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

export default UDRPage;
export const Head = () => <title>UDR</title>;
