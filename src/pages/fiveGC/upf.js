import { Link } from "gatsby";
import * as React from "react";

// Components
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
// Images
import productsImage from "../../images/product-header.png";
import upf from "../../images/UPF.jpg";

const UPFPage = () => {
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
        <Link to="/fiveGC/upf">UPF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            UPF
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            UPF, or User Plane Function, is a fundamental network function in
            the 5G Core (5GC) architecture. It plays a central role in managing
            and processing user data traffic as it traverses the 5G network. UPF
            is part of the 5G data plane and is responsible for various key
            functions related to data forwarding, policy enforcement, and
            traffic management. Here's a detailed description of UPF and its
            functions:
            <div className="mt-2  pl-5">
              <ol className="list-decimal list-inside">
                <li className="mb-4">
                  <span className="font-bold">
                    Data Forwarding and Routing:{" "}
                  </span>
                  UPF is responsible for forwarding and routing user data
                  packets between the User Equipment (UE) and external networks
                  (e.g., the internet) or other network functions within the 5G
                  Core. It ensures efficient and timely forwarding of data
                  packets to their intended destinations.
                </li>
                <li className="mb-4">
                  <span className="font-bold">
                    Traffic Policing and Shaping:{" "}
                  </span>
                  UPF enforces traffic policies defined by the Policy Control
                  Function (PCF) to control the flow of user data. This includes
                  traffic policing to manage data traffic rates and traffic
                  shaping to conform to specific QoS requirements.
                </li>
                <li className="mb-4">
                  <span className="font-bold">
                    Quality of Service (QoS) Enforcement:{" "}
                  </span>
                  UPF enforces QoS parameters, ensuring that the user data
                  traffic meets the specified QoS levels, including latency,
                  bandwidth, and packet loss. It allocates and manages network
                  resources accordingly to maintain a consistent QoS for each
                  user.
                </li>
                <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
                  <img className="w-auto h-[400px]" src={upf} alt="5GC core" />
                </div>
                <li className="mb-4">
                  <span className="font-bold">
                    Buffering and Flow Control:{" "}
                  </span>
                  UPF manages buffers and flow control mechanisms to optimize
                  the handling of data traffic, especially during congestion or
                  varying network conditions. It ensures smooth data
                  transmission and avoids congestion-related issues.
                </li>
                <li className="mb-4">
                  <span className="font-bold">Charging and Accounting: </span>
                  UPF may be involved in charging and accounting processes,
                  tracking the usage of network resources by users for billing
                  and accounting purposes. It collects data related to data
                  usage for accurate billing.
                </li>
                <li className="mb-4">
                  <span className="font-bold">
                    Service Continuity and Redundancy:{" "}
                  </span>
                  UPF supports service continuity by allowing seamless handovers
                  between different network nodes or technologies (e.g., 5G to
                  Wi-Fi). It ensures that the user's data session remains
                  uninterrupted during these transitions. Additionally, UPF may
                  have redundancy mechanisms to ensure high availability and
                  fault tolerance.
                </li>
                <li className="mb-4">
                  <span className="font-bold">
                    Integration with Other Network Functions:{" "}
                  </span>
                  UPF collaborates with various other network functions within
                  the 5G Core, such as SMF (Session Management Function), AMF
                  (Access and Mobility Management Function), and PCF, to ensure
                  the proper functioning of the 5G network and the delivery of
                  services.
                </li>
              </ol>
            </div>
            In summary, the User Plane Function (UPF) is a critical component of
            the 5G Core, responsible for handling and managing user data
            traffic, enforcing QoS policies, and ensuring efficient data
            forwarding within the 5G network. Its functions are essential for
            providing a seamless and high-quality user experience in 5G
            networks.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UPFPage;
export const Head = () => <title>UPF</title>;
