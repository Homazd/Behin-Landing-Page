import * as React from "react";
// Antd Components
import { Collapse } from "antd";
// Hooks
import { useState, useEffect } from "react";

const elements = [
  {
    key: "1",
    label: (
      <>
        <div className="flex">
          {/* <i class="fa-solid fa-wifi fa-sm" style={{ color: "#37a8cd" }}></i> */}
          <span className="mx-[5px] text-sm">CS Core</span>
        </div>
      </>
    ),
    items: ["Equipment Identity Register (EIR)", "Gateway Mobile Switching Center", "Home Location Register"],
  },
  {
    key: "2",
    label: "Messaging",
    items: <p>Bulk SMS-MMS Platform</p>,
  },
  {
    key: "3",
    label: "Roaming",
    items: <p>Bulk SMS-MMS Platform</p>,
  },
  {
    key: "4",
    label: "Intelligent Network and VAS",
    items: <p>Bulk SMS-MMS Platform</p>,
  },
  {
    key: "5",
    label: "Traffic Management, AAA & Policy Control",
    items: <p>Bulk SMS-MMS Platform</p>,
  },
  {
    key: "6",
    label: "Smart/Safe City",
    items: <p>Bulk SMS-MMS Platform</p>,
  },
  {
    key: "7",
    label: "NGN/IMS Equipment",
    items: <p>Bulk SMS-MMS Platform</p>,
  },
  {
    key: "8",
    label: "Customer Care",
    items: <p>Bulk SMS-MMS Platform</p>,
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
            {elements.map((element) => (
              <Panel
                className="bg-slate-100"
                header={element.label}
                key={element.key}
              >
                {element.items}
              </Panel>
            ))}
          </Collapse>
        </div>
      )}
      {isTablet && (
        <div className="mt-[191px]">
          <h1 className="text-[30px] font-bold font-sans mb-[66px] pl-[30px]">
            {" "}
            BBDH Product Line
          </h1>
          <div className="grid grid-cols-2 gap-3 px-[20px] laptop:grid-cols-4">
            <div className="ml-[15px] mb-[30px]">
              <p className="text-[18px] font-bold font-sans">CS Core</p>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Equipment Identity Register(EIR)
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Gateway Mobile Switching Center
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Home Location Register(HLR/HSS)
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                STP(Signaling Transfer Point)
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Evolved Pocket Core(EPC)
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                GGSN/PDN GW
              </a>
            </div>
            <div className="mb-[30px] mx-[15px]">
              <p className="text-[18px] font-bold font-sans">
                Traffic Management, AAA & Policy Control
              </p>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Bill Shock Prevention
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Diameter Real-Time Mediation(DRA)
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                DPI Platform
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                OSC Platform for MVNO/MVNE
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Policy Controller(PCRF)
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Real-time Data Charging
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                WiFi Calling Platform
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Wi-Fi Offload
              </a>
            </div>
            <div className="mb-[30px] mx-[15px]">
              <p className="text-[18px] font-bold font-sans">Messaging</p>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Bulk SMS-MMS Platform
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Cell Broadcast Center
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                SMPP Proxy/Router
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                SMS Firewall
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                SMS Center
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                USSD Server
              </a>
            </div>
            <div className="mb-[30px] mx-[15px]">
              <p className="text-[18px] font-bold font-sans">Smart/Safe City</p>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Smart/Safe City
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Public Warning Alert
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                112/911- Emergency Services Response System
              </a>
            </div>
            <div className="mb-[30px] mx-[15px]">
              <p className="text-[18px] font-bold font-sans">Roaming</p>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Boarder Roaming Gateway
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Gateway Location Register
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Multi IMSI Roaming Gateway
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Voice Quality Control for Roamers and SIM BOX Detection
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Signaling Firewall
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Steering of Roaming Platform
              </a>
            </div>
            <div className="mb-[30px] mx-[15px]">
              <p className="text-[18px] font-bold font-sans">
                NGN/IMS Equipment
              </p>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Trunk VoIP Gateway
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Softswitch class 4
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Softswitch class 5
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                High-capacity Access Gateway
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Small-capacity Access Gateway
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Signaling Converters
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Session Boarder Controller(SBC)
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Session Border Controller
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                IMS Core
              </a>
            </div>
            <div className="mb-[30px] mx-[15px]">
              <p className="text-[18px] font-bold font-sans">
                Intelligent Network & VAS
              </p>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Call Back
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Call Completion Suite
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Call Collect
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                CAMEL Gateway/Proxy
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Location Based Services Platform
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Local Number for Visitore
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Mobile Number Portability
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Content Delivery Platform
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Personal Ring Back Tone & Video Ring Back Tone
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Sponsored Call
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Virtual Office/MVPN
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Voice-Video Mail System
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Missed Call Notification
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                xVLR
              </a>
            </div>
            <div className="mb-[30px] mx-[15px]">
              <p className="text-[18px] font-bold font-sans">Customer Care</p>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Call Center
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Interactive Voice Response(IVR)
              </a>
              <a
                className="text-[14px] underline text-slate-700 font-normal block"
                href="www.google.com"
              >
                Voucher Management System
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductList;
