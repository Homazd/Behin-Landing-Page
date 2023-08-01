import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import imsImage from "../../images/ipsystem-header.png";

const VoltePage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${imsImage})` }}
      >
        IMS Core
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/ims/">IMS</Link> /{" "}
        <Link to="/ims/volte">VoLTE</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Voice over LTE (VoLTE)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            VoLTE stands for Voice over LTE. It is a technology that enables
            voice calls to be transmitted over the 4G LTE (Long-Term Evolution)
            network, which is primarily designed for data transmission.
            Traditionally, voice calls were transmitted over 2G and 3G networks
            using circuit-switched technology. However, with the introduction of
            LTE, which is a packet-switched technology optimized for data, a new
            method was needed to carry voice calls over the 4G network. VoLTE
            allows voice calls to be transmitted as data packets over the LTE
            network. It uses the IP Multimedia Subsystem (IMS) technology to
            provide high-quality voice communication. VoLTE offers several
            benefits, including improved call quality with HD voice, faster call
            setup times, and simultaneous voice and data services. It also
            enables advanced features such as video calling and multimedia
            sharing during voice calls. To use VoLTE, both the mobile device and
            the network must support the technology. VoLTE is supported by many
            modern smartphones, and mobile network operators have been gradually
            rolling out VoLTE services in their LTE networks. Overall, VoLTE
            revolutionizes voice communication by leveraging the LTE network's
            data capabilities to deliver high-quality voice calls and enable
            advanced features.
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

export default VoltePage;
export const Head = () => <title>VoLTE</title>;
