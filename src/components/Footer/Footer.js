import * as React from "react";
import { Collapse, Divider } from "antd";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
// Images
import MyIcon from "../../images/logo.svg";
import Phone from "../../images/call-outline.svg";
import Mail from "../../images/mail-outline.svg";
const items = [
  {
    key: "1",
    header: <h3 className="text-slate-50 text-[22px] font-sans">Solutions</h3>,
    children: <p className="text-slate-50">Content of Panel 1</p>,
  },
  {
    key: "2",
    header: <h3 className="text-slate-50 text-[22px] font-sans">Products</h3>,
    children: <p className="text-slate-50">Content of Panel 1</p>,
  },
  {
    key: "3",
    header: <h3 className="text-slate-50 text-[22px] font-sans">Company</h3>,
    children: <p className="text-slate-50">Content of Panel 1</p>,
  },
];
function Footer() {
  const { Panel } = Collapse;

  const customExpandIcon = ({ isActive }) => {
    return isActive ? (
      <CaretDownOutlined style={{ color: "#f8fafc", fontSize: "1rem" }} />
    ) : (
      <CaretRightOutlined
        style={{ color: "#f8fafc", fontSize: "1rem", marginTop: "10px" }}
      />
    );
  };
  return (
    <>
      <footer className="mt-[85px] pt-[36px] bg-blue-700">
        <div className="px-[15px]">
          <Collapse
            ghost
            expandIconPosition="left"
            expandIcon={customExpandIcon}
          >
            {items.map((item) => (
              <Panel header={item.header} key={item.key}>
                {item.children}
              </Panel>
            ))}
          </Collapse>
          <h3 className="mt-[17px] pb-[27px] text-slate-50 font-bold text-[22px]">
            Contacts
          </h3>
          <div className="flex">
            <Phone className="w-6 h-6 mt-[5px] text-slate-50" />
            <span className="text-slate-50 ml-[15px] text-[22px] font-bold">
              +98 21 33104958
            </span>
          </div>
          <div className="flex mt-[38px]">
            <Mail className="w-6 h-6 mt-[5px] text-slate-50" />
            <span className="text-slate-50 ml-[15px] text-[22px] font-bold underline">
              sales@bbdh.com
            </span>
          </div>
          <p className="text-slate-50 underline mt-[20px] ml-[56px]">
            LinkedIN
          </p>
          <p className="underline text-slate-50 ml-[56px] mt-[21px]">
            All contacts
          </p>
        <Divider className="pt-[10px]" style={{ colorText: '#fffff' }} />
        </div>
      </footer>
      {/* <div className="mt-[65px]">
        <MyIcon className="w-10 h-10" opacity="0.8" fill="#2563eb" />
      </div> */}
    </>
  );
}
export default Footer;
