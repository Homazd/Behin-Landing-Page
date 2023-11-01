import * as React from "react";
import { Link } from "gatsby";
// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";
import NEF from "../../images/NEF.jpg";

const NEFPage = () => {
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
        <Link to="/fiveGC/nef">NEF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            NEF
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            The Network Exposure Function (NEF) is a key architectural component
            within the 5G (Fifth Generation) mobile network infrastructure. It
            plays a crucial role in enabling external applications and services
            to access and interact with the 5G network, allowing for innovative
            and customized service offerings. The NEF is part of the 5G
            Service-Based Architecture (SBA) and contributes to the openness and
            flexibility of the 5G ecosystem. Here's a detailed description of
            NEF and its functions:
            <ol className="list-decimal pl-5 mt-3">
              <li>
                <span className="font-bold">
                  Network Exposure and API Management:{" "}
                </span>{" "}
                The NEF primarily facilitates network exposure to external
                applications and services through well-defined Application
                Programming Interfaces (APIs). These APIs provide a standardized
                and controlled way for third-party developers to access specific
                functionalities and data within the 5G network.{" "}
              </li>
              <li>
                <span className="font-bold">Policy-Driven Access Control:</span>{" "}
                NEF enforces policy-driven access control to ensure that only
                authorized applications and services can access the network and
                utilize its resources. Policies define the rules and conditions
                under which external entities can interact with the network,
                including permissions, data access rights, and usage
                restrictions.
              </li>
              <li>
                <span className="font-bold">
                  Subscriber and Context Information Exposure:
                </span>{" "}
                NEF allows external applications to access subscriber-related
                information and contextual data. This might include user
                profiles, preferences, location data, network capabilities, and
                other relevant context that can be leveraged to deliver
                personalized services and enhance user experiences.{" "}
              </li>
              <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
                <img className="w-auto h-[400px]" src={NEF} alt="5GC core" />
              </div>
              <li>
                <span className="font-bold">Dynamic Policy Management:</span>{" "}
                NEF supports dynamic policy management, enabling real-time
                adaptation and enforcement of policies based on changing network
                conditions, user behavior, or other contextual factors. This
                flexibility ensures efficient resource utilization and
                responsiveness to varying service demands.{" "}
              </li>

              <li>
                <span className="font-bold">
                  Service Orchestration and Composition:
                </span>{" "}
                NEF aids in the orchestration and composition of services by
                allowing external applications to request specific network
                services or compose new services by combining existing
                functionalities. This fosters service innovation and the
                development of diverse applications tailored to different use
                cases.{" "}
              </li>
              <li>
                {" "}
                <span className="font-bold">Data Privacy and Security:</span> AF
                collaborates with various network functions within the 5GC, such
                as SMF (Session Management Function), UPF (User Plane Function),
                and others, to ensure seamless communication and interaction
                with applications and their corresponding services.{" "}
              </li>
              <li>
                <span className="font-bold">
                  Integration with Core Network Functions:
                </span>{" "}
                NEF integrates with various core network functions, such as the
                Authentication and Authorization Function (AAF), Unified Data
                Management (UDM), and the Policy Control Function (PCF), to
                coordinate policy decisions and ensure seamless functionality
                across the network.{" "}
              </li>
            </ol>{" "}
            In summary, the Network Exposure Function (NEF) is a critical
            component of the 5G architecture, enabling controlled and
            standardized access to network resources and information through
            APIs. It promotes innovation, service customization, and efficient
            utilization of the 5G network while maintaining data privacy and
            security.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NEFPage;
export const Head = () => <title>AF</title>;
