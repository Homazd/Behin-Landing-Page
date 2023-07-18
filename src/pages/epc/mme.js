import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import imsImage from "../../images/ims-header.webp";

const MMEPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen w-80 h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${imsImage})` }}
      >
        IMS
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/ims/">5GC</Link> /{" "}
        <Link to="/ims/mme">MME</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Mobility Management Entity (MME)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            MME stands for Mobility Management Entity. It is a key element in
            the core network of 4G LTE (Long-Term Evolution) mobile
            communication systems. The MME is responsible for managing the
            mobility of mobile devices within the LTE network. Its main
            functions include tracking and authenticating devices, handling
            session management, and managing mobility-related procedures such as
            handovers and tracking area updates. When a mobile device
            establishes a connection to the LTE network, the MME is responsible
            for authenticating the device and initiating the necessary
            procedures for its connectivity and mobility management. The MME
            communicates with other network elements such as the Home Subscriber
            Server (HSS) for subscriber authentication and the Serving Gateway
            (SGW) for data routing. It plays a crucial role in ensuring smooth
            handovers, efficient mobility management, and secure connectivity
            for mobile devices in LTE networks.
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

export default MMEPage;
export const Head = () => <title>MME</title>;
