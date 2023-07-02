import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";
const data = [
  {
    header: "  Security and Event Management (SIEM)",
    elements: [
      "User Behavior Monitoring(Data Usage, Source and Destination IP, Suspicious Behavior , ... ",
      "Monitoring information and files generated on the network and detecting tempering in network setting",
      "Monitoring, Recording and Storage of User Information for up to 1 Million Users",
      "Equipment Management and Collection",
      "Artificial Intelligence-Based Data Analysis",
      "Generating CDR Files",
    ],
  },
  {
    header: "Network Monitoring Management Tools",
    elements: [
      "Monitoring all networks and reporting errors",
      "Checking all equipment online and their connectivity status",
      "Real-time monitoring of network throughput, including equipment-specific rates for all networks or provinces",
      "Monitoring temperature, latency, and quality of each communication port in the entire network"
    ],
  },
  {
    header: "Log Monitoring Management Tools",
    elements: [
      "Real-time monitoring of each user's connection and disconnection to the network",
      "Real-time monitoring of eNodeB/gNB equipment connectivity status",
      "Monitoring of undefined users and identification of attacks",
      "Monitoring Connected Devices' IP and Storage of relevant logs"
    ],
  },
];

const MonitoringPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen w-80 h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        Products
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/products/">Products</Link> /{" "}
        <Link to="/products/monitoring">Monitoring</Link>
      </p>

      <div className="px-[15px] mt-5">
        <ul className="list-disc list-inside">
          {data.map((item, index) => (
            <>
              <h1 className="font-bold text-[14px] mt-6">{item.header}</h1>
              {item.elements.map((element, index) => (
                <li
                  key={index}
                  className="p-1 text-gray-700 text-[12px] font-normal"
                >
                  {element}
                </li>
              ))}
            </>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default MonitoringPage;
