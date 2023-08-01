import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import imsImage from "../../images/ipsystem-header.png";

const ViltePage = () => {
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
        <Link to="/ims/vilte">ViLTE</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Video over LTE (ViLTE)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            ViLTE, or Video over LTE, is a feature of 5G Core networks that
            allows for high-quality video calls to be made over cellular
            networks. ViLTE builds on the foundation of Voice over LTE (VoLTE),
            which enables voice calls to be made over 4G networks. One of the
            key benefits of ViLTE is the ability to make high-quality video
            calls without the need for third-party applications or services.
            This means that users can make video calls directly from their
            phone's native dialer, just like they would make a regular voice
            call. ViLTE also supports features such as call transfer, call hold,
            and call waiting, which are commonly used in voice calls. ViLTE uses
            the IP Multimedia Subsystem (IMS) architecture, which is a
            standardized framework for delivering multimedia services over IP
            networks. IMS enables ViLTE to provide a consistent and reliable
            user experience across different networks and devices. ViLTE also
            supports advanced codecs such as H.265, which enables high-quality
            video to be transmitted using less bandwidth. In summary, ViLTE is a
            feature of 5G Core networks that enables high-quality video calls to
            be made directly from a phone's native dialer, without the need for
            third-party applications or services. ViLTE is based on the IMS
            architecture and supports advanced codecs for efficient video
            transmission.
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

export default ViltePage;
export const Head = () => <title>ViLTE</title>;
