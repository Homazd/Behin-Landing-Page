import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const AUSFPage = () => {
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
        <Link to="/fiveGC/ausf">AUSF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            AUSF
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
           AUSF stands for Authentication Server
            Function. The AUSF is a network function in the 5G core network that
            is responsible for authenticating and authorizing User Equipments
            (UEs) and providing security-related information to other network
            functions. The AUSF performs several key functions, including:
            <div className="mt-2">
              <ol className="list-decimal list-inside">
                <li className="mb-4">
                  Authentication and authorization of UEs: The AUSF is
                  responsible for authenticating and authorizing UEs before they
                  can access the network. This involves validating the UE's
                  security credentials, such as the Subscriber Identity Module
                  (SIM) card information or digital certificates, and verifying
                  the UE's authorization to access specific network services.
                </li>
                <li className="mb-4">
                  Key management: The AUSF is responsible for generating and
                  distributing security keys to other network functions, such as
                  the Access and Mobility Management Function (AMF) and the
                  Security Edge Protection Proxy (SEPP). These keys are used to
                  protect the confidentiality and integrity of user data.
                </li>
                <li className="mb-4">
                  Security context management: The AUSF is responsible for
                  managing the security context of UEs, including the generation
                  and distribution of security parameters, such as the User
                  Plane (UP) security context and the Application Protocol (AP)
                  security context.
                </li>
                <li className="mb-4">
                  Subscription information management: The AUSF is responsible
                  for managing the subscription information of UEs, including
                  the UE's profile and the network services that the UE is
                  authorized to access.
                </li>
              </ol>
            </div>
            The AUSF communicates with other network functions in the 5G core
            network, such as the AMF and the SEPP, to enable end-to-end security
            for the UE. For example, when a UE requests to establish a new data
            session, the AMF communicates with the AUSF to authenticate and
            authorize the UE, and with the SEPP to establish secure
            communication between the UE and the network. In summary, the AUSF
            is a critical network function in the 5G core network that is
            responsible for authenticating and authorizing UEs, managing
            security keys and security contexts, and managing subscription
            information. It plays a key role in ensuring the security and
            privacy of user data in the 5G network.
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

export default AUSFPage;
export const Head = () => <title>AUSF</title>;
