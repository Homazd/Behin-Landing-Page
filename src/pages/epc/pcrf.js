import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import imsImage from "../../images/ims-header.webp";

const PCRFPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="w-screen h-52 bg-center bg-cover tablet:h-80"
        style={{ backgroundImage: `url(${imsImage})` }}
      >
        IMS
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/epc/">EPC</Link> /{" "}
        <Link to="/epc/pcrf">PCRF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Policy and Charging Rules Function (PCRF)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            PCRF stands for Policy and Charging Rules Function. It is a network
            function within the core network architecture of 4G LTE (Long-Term
            Evolution) and 5G (fifth-generation) wireless communication systems.
            The PCRF is responsible for policy control and charging management.
            The PCRF manages and enforces policies related to Quality of Service
            (QoS), traffic prioritization, network resource allocation, and
            charging in the mobile network. It determines how network resources
            should be allocated to different services and applications based on
            their specific requirements. It also ensures that policies related
            to data usage, access control, and service levels are enforced.
            Additionally, the PCRF interacts with other network functions such
            as the Policy Control Enforcement Function (PCEF) and the Charging
            System (CS) to enforce policy rules and facilitate charging and
            billing processes. It provides dynamic policy control to adapt to
            changing network conditions and user requirements. The PCRF plays a
            crucial role in enabling personalized and optimized services,
            managing network congestion, ensuring fair resource allocation, and
            facilitating accurate charging and billing in both LTE and 5G
            networks.
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

export default PCRFPage;
export const Head = () => <title>PCRF</title>;
