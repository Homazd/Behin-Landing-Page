import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const SMFPage = () => {
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
        <Link to="/fiveGC/smf">SMF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            SMF
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            In the context of 5G core, the Session Management Function (SMF) is
            a network function that is responsible for managing the
            establishment, modification, and termination of 5G sessions between
            a User Equipment (UE) and an application or service in the network.
            The SMF performs several key functions, including:
            <div className="mt-2">
              <ol className="list-decimal list-inside">
                <li className="mb-4">
                  Session establishment: The SMF is responsible for establishing
                  a new session between a UE and an application or service in
                  the network. This involves allocating resources for the
                  session and setting up the necessary network functions to
                  support the session.
                </li>
                <li className="mb-4">
                  Session modification: The SMF can modify an existing session
                  based on changes in the requirements of the UE or the
                  application. This includes modifying quality of service (QoS)
                  parameters, adding or removing network functions, or changing
                  the data path of the session.
                </li>
                <li className="mb-4">
                  Session termination: The SMF is responsible for terminating a
                  session when it is no longer needed. This involves releasing
                  the resources allocated for the session and notifying other
                  network functions of the termination.
                </li>
                <li className="mb-4">
                  Policy enforcement: The SMF enforces network policies related
                  to session management, such as admission control policies that
                  limit the number of sessions that can be established at a
                  given time.
                </li>
              </ol>
            </div>{" "}
            The SMF communicates with other network functions in the 5G core
            network, such as the AMF (Access and Mobility Management Function)
            and UPF (User Plane Function), to enable end-to-end services for the
            UE. For example, when a UE requests to establish a new data session,
            the SMF communicates with the AMF to authenticate and authorize the
            UE, and with the UPF to establish the data path for the session. In
            summary, the SMF is a critical network function in the 5G core
            network that is responsible for managing the establishment,
            modification, and termination of 5G sessions between a UE and an
            application or service in the network. It performs policy
            enforcement, resource allocation, and coordination with other
            network functions to enable end-to-end services for the UE.
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

export default SMFPage;
export const Head = () => <title>SMF</title>;
