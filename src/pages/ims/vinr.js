import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import imsImage from "../../images/ipsystem-header.png";

const VinrPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen w-80 h-auto bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${imsImage})` }}
      >
        IMS Core
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/ims/">IMS</Link> /{" "}
        <Link to="/ims/vinr">ViNR</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
           Voice over New Radio (ViNR)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            ViNR, or Video over New Radio, is a feature of 5G that enables
            high-quality video calls to be made directly over the 5G network,
            without the need for fallback to 4G or lower networks. ViNR is
            supported by the 5G Core network using the IP Multimedia Subsystem
            (IMS) architecture, just like VoNR. Similar to VoNR, ViNR also uses
            the IMS architecture to deliver video calls over the 5G network.
            This allows for a consistent and reliable user experience, with
            high-quality video calls that are similar to traditional video calls
            made over other networks. ViNR supports advanced codecs such as
            H.265, which enables high-quality video to be transmitted using less
            bandwidth. One of the key benefits of ViNR is that it allows for
            high-quality video calls to be made directly from a phone's native
            dialer, just like VoNR and VoLTE. This means that users can make
            video calls without the need for third-party applications or
            services, and can enjoy a seamless and integrated user experience.
            ViNR also supports features such as call transfer, call hold, and
            call waiting, which are commonly used in video calls. ViNR enables
            simultaneous video and data transmission over the 5G network,
            without any impact on call quality. In summary, ViNR is a feature of
            the 5G Core network that enables high-quality video calls to be made
            directly over the 5G network, using the IMS architecture. ViNR
            supports advanced codecs and features, and allows for a seamless and
            integrated user experience.
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

export default VinrPage;
export const Head = () => <title>ViNR</title>;
