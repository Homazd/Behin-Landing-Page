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
            AUSF In the context of 5G networks, AUSF stands for Authentication
            Server Function (AUSF). It is a critical network function within the
            5G Core (5GC) architecture responsible for authentication,
            authorization, and key management for subscribers accessing the 5G
            network. Here's a detailed description of AUSF and its functions:
            <div className="mt-2">
              <ol className="list-decimal list-inside">
                <li className="mb-4">
                  <span className="font-bold">
                    Authentication and Authorization:
                  </span>{" "}
                  The AUSF is responsible for authenticating and authorizing
                  users who want to access the 5G network. It validates the
                  identity of the user, ensuring that they have the necessary
                  credentials and permissions to access the network.
                </li>
                <li className="mb-4">
                  <span className="font-bold">Security Functions:</span> AUSF is
                  involved in implementing security functions such as generating
                  and validating security keys for secure communication between
                  the user equipment (UE) and the network. These keys are
                  crucial for establishing secure communication sessions.
                </li>
                <li className="mb-4">
                <span className="font-bold">Subscription Information Handling:</span> AUSF manages
                  subscription-related information for each user, including
                  authentication data, security keys, and user profile data. It
                  retrieves and processes this information to enable secure
                  access and services for the user.
                </li>
                <li className="mb-4">
                <span className="font-bold">Interactions with Other Functions:</span> AUSF interacts with various
                  network functions within the 5G Core, including the
                  Authentication Management Function (AMF) and the Unstructured
                  Supplementary Service Data (USSD) Function, to facilitate
                  authentication processes and ensure a seamless user
                  experience.
                </li>
                <li className="mb-4">
                <span className="font-bold">UE Authentication:</span> When a user equipment (UE) attempts to
                  connect to the 5G network, AUSF authenticates the UE by
                  verifying its identity and credentials, ensuring the UE is
                  authorized to access the network.
                </li>
                <li className="mb-4">
                <span className="font-bold">Authentication Vector Generation:</span> AUSF generates
                  authentication vectors, which include authentication keys and
                  related parameters necessary for securing the communication
                  between the UE and the network during the authentication
                  process.
                </li>
                <li className="mb-4">
                <span className="font-bold">Key Generation and Distribution:</span> AUSF is involved in
                  generating encryption keys and distributing them securely to
                  the UE and other relevant network functions to establish
                  secure communication channels.
                </li>
                <li className="mb-4">
                <span className="font-bold">Integration with Authentication Management Function (AMF):</span>
                  AUSF closely collaborates with the AMF to coordinate
                  authentication processes and exchange authentication-related
                  information. This ensures a streamlined and secure
                  authentication procedure.
                </li>
              </ol>
            </div>
            The Authentication Server Function (AUSF) is a crucial element
            within the 5G Core network, ensuring that only authorized users can
            access the 5G network securely. It plays a pivotal role in the
            security and integrity of the 5G communication, providing a
            foundation for secure and reliable connectivity for 5G users.
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
