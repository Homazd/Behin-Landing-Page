import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const AMFPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        Products
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/fiveGC/">5GC</Link> /{" "}
        <Link to="/fiveGC/amf">AMF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
           AMF
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            AMF stands for Access and Mobility Management Function. The AMF is a
            network function that is responsible for managing the access and
            mobility of user equipment (UE) in the 5G core network. The AMF
            performs several key functions, including: Authentication and
            authorization of the UE: The AMF verifies the identity of the UE and
            authorizes it to access the network. This includes validating the
            UE's security credentials, such as SIM card information or digital
            certificates. Allocation of temporary UE identifiers: The AMF
            assigns temporary identifiers to the UE, which are used to track the
            UE's location and mobility within the network. Management of UE
            mobility: The AMF is responsible for tracking the UE's current
            location and managing its handovers between different 5G base
            stations or cells. This includes selecting the best serving cell for
            the UE based on factors such as signal strength and network
            congestion. Enforcement of network policies: The AMF enforces
            network policies related to access and mobility, such as admission
            control policies that limit the number of UEs that can access the
            network at a given time. The AMF communicates with other network
            functions in the 5G core network, such as the UPF (User Plane
            Function) and SMF (Session Management Function), to enable
            end-to-end services for the UE. For example, when a UE requests to
            establish a new data session, the AMF communicates with the SMF to
            set up the session and with the UPF to establish the data path. In
            summary, the AMF is a critical network function in the 5G core
            network that is responsible for managing the access and mobility of
            UEs, enforcing network policies, and enabling end-to-end services
            for UEs.
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

export default AMFPage;
export const Head = () => <title>AMF</title>;
