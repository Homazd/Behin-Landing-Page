import * as React from "react";
// Antd Components
import { Collapse } from "antd";
// Hooks
import { useState, useEffect } from "react";

const products = [
  {
    header: "CS Core",
    subItems: [
      "Equipment Identity Register (EIR)",
      "Gateway Mobile Switching Center",
      "Home Location Register",
      "STP (Signaling Transfer Point",
      "Evolved Packet Core",
      "GGSN/PDN GW",
    ],
  },
  {
    header: "Roaming",
    subItems: [
      "Boarder Roaming Gateway",
      "Gateway Location Register (GLR)",
      "Multi IMSI Roaming Gateway",
      "Roaming Optimisation",
    ],
  },
  {
    header: "NGN/IMS Equipment",
    subItems: [
      "Trunk VoIP Gateway",
      "High-capacity Access Gateway",
      "Small-capacity Access Gateway",
      "STP (Signaling Transfer Point",
      "IMS Core",
    ],
  },
  {
    header: "Messaging",
    subItems: [
      "Bulk SMS-MMS Platform",
      "Cell Broadcast Center",
      "USSD Server",
      "STP (Signaling Transfer Point",
    ],
  },
  {
    header: "Intelligent Network & VAS",
    subItems: ["Call Back", "Call Collect", "Location Based Services Platform"],
  },
];

const { Panel } = Collapse;

function ProductList() {
  const [isTablet, setisTablet] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setisTablet(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!isTablet && (
        <div className="mt-[77px] mx-[15px]">
          <h1 className="text-[22px] font-bold mb-[27px]">BBDH Product Line</h1>
          <Collapse>
            {products.map((element, index) => (
              <Panel
                className="bg-slate-100"
                header={element.header}
                key={index}
              >
                {element.subItems.map((item) => (
                  <p className="leading-loose underline text-gray-500 hover:no-underline hover:text-blue-400">
                    {item}
                  </p>
                ))}
              </Panel>
            ))}
          </Collapse>
        </div>
      )}
      {isTablet && (
        <div className="mt-[191px]  laptop:w-[984px] desktop:w-[1170px] mx-auto">
          <h1 className="text-[30px] font-bold font-sans mb-[66px] px-[20px]">
            BBDH Product Line
          </h1>
          <div className="grid grid-cols-2 gap-3 px-[20px] laptop:grid-cols-4">
            {products.map((item) => (
              <div className="mb-[30px]">
                <p className="text-[18px] font-bold font-sans">{item.header}</p>
                {item.subItems.map((subItem) => (
                  <a
                    className="text-[14px] underline text-slate-700 font-normal block hover:text-blue-400 hover:no-underline"
                    href="www.google.com"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default ProductList;
