import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";
import amf from "../../images/AMF.jpg";

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
            AMF, or Access and Mobility Management Function, is a fundamental
            network function within the 5G Core (5GC) architecture. It plays a
            crucial role in managing and controlling access to the 5G network
            for user equipment (UE) and ensuring seamless mobility of the
            devices within the network. Here's a detailed description of AMF and
            its functions:
            <ol className="list-decimal">
              <li>
                <span className="font-bold">Access Control:</span> AMF is
                responsible for controlling and managing access to the 5G
                network. It authenticates and authorizes the User Equipment (UE)
                trying to connect to the network, ensuring that only authorized
                devices gain access.
              </li>
              <li>
                <span className="font-bold">Mobility Management:</span> AMF
                facilitates mobility management for UEs, ensuring that the
                devices can move seamlessly within the network while maintaining
                continuous connectivity. This includes handling procedures
                related to handovers between different access points or
                networks.{" "}
              </li>
              <li>
                <span className="font-bold">Security Functions:</span> AMF
                implements security functions to ensure a secure connection
                between the UE and the network. It manages security key
                handling, encryption, and authentication procedures to protect
                data transmission and maintain the integrity and confidentiality
                of information.{" "}
              </li>
              <li>
                <span className="font-bold">
                  User Authentication and Authorization:
                </span>{" "}
                AMF authenticates and authorizes users, validating their
                credentials and ensuring they have the necessary permissions to
                access the network and its services.{" "}
              </li>
              <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
                <img className="w-auto h-[400px]" src={amf} alt="5GC core" />
              </div>
              <li>
                <span className="font-bold">
                  Registration and Deregistration:
                </span>{" "}
                AMF manages the registration and deregistration processes for
                UEs in the network. When a UE connects to the network, AMF
                facilitates the registration, allocating necessary resources and
                setting up necessary connections. When the UE disconnects, it
                handles the deregistration process.{" "}
              </li>
              <li>
                {" "}
                <span className="font-bold">Session Management:</span> AMF
                assists in session management by establishing and managing
                communication sessions for UEs. It coordinates with other
                network functions like SMF (Session Management Function) to set
                up and manage these sessions efficiently.
              </li>
              <li>
                <span className="font-bold">
                  QoS (Quality of Service) Enforcement:
                </span>{" "}
                AMF enforces QoS policies, ensuring that the required level of
                service quality is maintained for different types of traffic and
                applications. It coordinates with other network functions to
                guarantee that QoS requirements are met.{" "}
              </li>
              <li>
                <span className="font-bold">Policy Interaction:</span> AMF
                interacts with the PCF (Policy Control Function) to make policy
                decisions related to access, mobility, and QoS. It ensures that
                policies defined by PCF are appropriately applied and enforced
                throughout the network.{" "}
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  Integration with Other Network Functions:
                </span>{" "}
                AMF collaborates with various network functions within the 5G
                Core, such as SMF (Session Management Function), UPF (User Plane
                Function), and PCF (Policy Control Function), to ensure smooth
                access management, mobility, and service delivery. In summary,
                the Access and Mobility Management Function (AMF) is a vital
                component of the 5G Core architecture, responsible for
                controlling access to the network, managing mobility, enforcing
                security measures, and ensuring the quality and continuity of
                communication services for user equipment within a 5G network.
              </li>
            </ol>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AMFPage;
export const Head = () => <title>AMF</title>;
