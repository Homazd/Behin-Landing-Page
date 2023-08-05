import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import imsImage from "../../images/ims-header.webp";

const HSSPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${imsImage})` }}
      >
        IMS
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/epc/">EPC</Link> /{" "}
        <Link to="/epc/hss">HSS</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Home Subscriber Server (HSS)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            HSS stands for Home Subscriber Server. It is a key component of the
            core network in mobile communication systems, including 3G (UMTS)
            and 4G (LTE). The HSS serves as a centralized database that stores
            and manages subscriber-related information for a mobile network
            operator. It contains crucial data about subscribers, such as their
            identities, authentication credentials, service profiles, and
            subscription information. The HSS is responsible for authenticating
            and authorizing subscribers, enabling secure access to the network,
            and facilitating mobility management. It plays a vital role in
            supporting subscriber services, such as call routing, mobility
            management, and subscriber authentication during handovers or
            roaming. The HSS interacts with other network elements, such as the
            Mobility Management Entity (MME) in LTE, to ensure seamless and
            secure communication for mobile users.
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

export default HSSPage;
export const Head = () => <title>HSS</title>;
