import * as React from "react";
// Antd Components
import { Collapse } from "antd";

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
    items: (
      <>
        <p>Equipment Identity Register</p>
      </>
    ),
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
  return (
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
  );
}
export default ProductList;
