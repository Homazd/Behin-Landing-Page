import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";
import SMF from "../../images/SMF.jpg"

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
            SMF stands for Session Management Function. It is a crucial network
            function within the 5G Core (5GC) architecture, specifically in the
            control plane, responsible for managing session-related aspects for
            user devices in a 5G network. The SMF primarily deals with the
            establishment, modification, and termination of sessions, as well as
            the management of data flows associated with those sessions. Here's
            a detailed description of SMF and its functions:
            <ol className="list-decimal pl-5 mt-3">
              <li>
                <span className="font-bold">
                  Session Establishment and Modification:{" "}
                </span>{" "}
                SMF is responsible for establishing sessions between the User
                Equipment (UE) and the network. This includes setting up the
                necessary signaling and data paths to facilitate communication.{" "}
              </li>
              <li>
                <span className="font-bold">Session Termination:</span> SMF
                handles the orderly termination of sessions, ensuring that all
                resources associated with a session are released properly and in
                a timely manner when a user session ends.
              </li>
              <li>
                <span className="font-bold">
                  Control and Management of Data Flows:
                </span>{" "}
                SMF controls and manages the data flows within a session. It
                determines how data is routed and handled, ensuring that it
                follows the appropriate policies and meets the Quality of
                Service (QoS) requirements.{" "}
              </li>
              <li>
                <span className="font-bold">Policy Enforcement:</span> SMF
                enforces policies related to session management and data
                handling. These policies may include QoS policies, security
                policies, and charging policies, among others.{" "}
              </li>
              <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
                <img className="w-auto h-[400px]" src={SMF} alt="5GC core" />
              </div>
              <li>
                <span className="font-bold">Mobility Management:</span> SMF
                assists in managing the mobility of the UE within the 5G
                network. It handles procedures related to handovers between
                different access points or networks to maintain the continuity
                of the session.{" "}
              </li>
              <li>
                {" "}
                <span className="font-bold">Charging and Accounting:</span> SMF
                may play a role in charging and accounting processes by tracking
                and logging the usage of network resources by the user. This
                data is essential for accurate billing and accounting purposes.{" "}
              </li>
              <li>
                <span className="font-bold">
                  Integration with Other Network Functions:{" "}
                </span>{" "}
                SMF collaborates with other network functions within the 5G
                Core, such as UPF (User Plane Function), AMF (Access and
                Mobility Management Function), and PCF (Policy Control
                Function), to ensure smooth session management and the delivery
                of services.{" "}
              </li>
              <li>
                <span className="font-bold">Policy Decision and Control:</span>{" "}
                SMF interacts with the PCF to make policy decisions regarding
                QoS and other aspects of session management. It ensures that the
                policies defined by PCF are appropriately applied and enforced.{" "}
              </li>
            </ol>
            In summary, the Session Management Function (SMF) is a critical
            element in the 5G Core architecture, responsible for establishing,
            managing, and terminating sessions for user devices in a 5G network.
            It plays a vital role in ensuring efficient session handling,
            enforcing policies, and maintaining the quality and continuity of
            communication sessions.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SMFPage;
export const Head = () => <title>SMF</title>;
