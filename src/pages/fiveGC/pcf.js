import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const PCFPage = () => {
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
        <Link to="/">Home</Link> / <Link to="/fiveGC/">5GC</Link> /{" "}
        <Link to="/fiveGC/pcf">PCF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
           Policy and Charging Function (PCF)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            Policy and Charging Function (PCF) is a functional entity defined in
            the 3GPP architecture for 4G and 5G mobile networks. The PCF is
            responsible for policy control and charging functions in the
            network. The policy control function of the PCF is responsible for
            defining and enforcing policies for network resources and services.
            This includes policies related to quality of service (QoS), access
            control, and traffic management. The PCF communicates with other
            network functions, such as the policy and charging enforcement
            function (PCEF) and the application function (AF), to enforce these
            policies. The charging function of the PCF is responsible for
            collecting and managing charging information for the network. This
            includes tracking usage of network resources, calculating charges
            for those resources, and generating charging records. The PCF
            communicates with other network functions, such as the charging data
            function (CDF) and the online charging system (OCS), to perform
            these functions. Overall, the PCF plays a critical role in ensuring
            that network resources are used efficiently, that users have
            appropriate access to services, and that charges for network usage
            are accurately calculated and collected.
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

export default PCFPage;
export const Head = () => <title>PCF</title>;
