import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import networkManagement from "../../images/network-management.webp"
import networkMonitoring from "../../images/monitoring.png";
import logMonitor from "../../images/log-monitor.png";

const data = [
  {
    header: "Network Monitoring Management Tools",
    elements: [
      "Monitoring all networks and reporting errors",
      "Checking all equipment online and their connectivity status",
      "Real-time monitoring of network throughput, including equipment-specific rates for all networks or provinces",
      "Monitoring temperature, latency, and quality of each communication port in the entire network",
    ],
    image: networkMonitoring,
  },
  {
    header: "Log Monitoring Management Tools",
    elements: [
      "Real-time monitoring of each user's connection and disconnection to the network",
      "Real-time monitoring of eNodeB/gNB equipment connectivity status",
      "Monitoring of undefined users and identification of attacks",
      "Monitoring Connected Devices' IP and Storage of relevant logs",
    ],
    image: logMonitor,
  },
];

const ToolsPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${networkManagement})` }}
      ></div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> /
        <Link to="/monitoring/tools">Monitoring</Link>
      </p>

      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center ">
        <ul className="list-disc list-inside">
          {data.map((item, index) => (
            <div className="grid tablet:grid-cols-2 gap-4 tablet:mt-[50px] desktop:mt-[100px]">
              <div className="col-span-1">
                <h1 className="font-bold text-[14px] mt-6 desktop:text-[23px]">
                  {item.header}
                </h1>
                {item.elements.map((element, index) => (
                  <li
                    key={index}
                    className="p-1 text-gray-700 text-[12px] desktop:text-[16px] font-normal"
                  >
                    {element}
                  </li>
                ))}
              </div>
              <div className="col-span-1 grid place-content-center">
                <img className="mt-5 h-48" src={item.image} alt="siem" />
              </div>
            </div>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default ToolsPage;
export const Head = () => <title>Monitoring Tools</title>;
