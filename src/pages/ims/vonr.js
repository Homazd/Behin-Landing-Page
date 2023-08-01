import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import imsImage from "../../images/ipsystem-header.png";

const VonrPage = () => {
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
        <Link to="/ims/vonr">VoNR</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Voice over New Radio (VoNR)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            VoNR, or Voice over New Radio, is a feature of 5G that enables voice
            calls to be made directly over the 5G network, without the need for
            fallback to 4G or lower networks. VoNR is supported by the 5G Core
            network using the IP Multimedia Subsystem (IMS) architecture. IMS is
            a standardized framework for delivering multimedia services over IP
            networks, including voice and video calls. VoNR uses the IMS
            architecture to deliver voice calls over the 5G network. This allows
            for a consistent and reliable user experience, with high-quality
            voice calls that are similar to traditional circuit-switched voice
            calls. VoNR supports a range of features that are commonly used in
            voice calls, including call transfer, call hold, call waiting, and
            conference calling. VoNR also supports advanced codecs such as EVS
            (Enhanced Voice Services), which enables high-quality voice calls to
            be made using less bandwidth. One of the key benefits of VoNR is
            that it allows for voice and data to be transmitted simultaneously
            over the 5G network, without any degradation in quality. This means
            that users can browse the internet, stream video, or use other
            data-intensive applications while making voice calls, without any
            impact on call quality. In summary, VoNR is a feature of the 5G Core
            network that enables voice calls to be made directly over the 5G
            network, using the IMS architecture. VoNR supports a range of
            features and advanced codecs, and allows for simultaneous voice and
            data transmission without any impact on call quality.
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

export default VonrPage;
export const Head = () => <title>VoNR</title>;
