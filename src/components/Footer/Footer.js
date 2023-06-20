import * as React from "react";
import { useState, useEffect } from "react";
// Antd Components
import { Collapse } from "antd";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import Contact from "./components/ContactFooter";
// Footer Image
import Pexel1 from "../../images/pexels1.jpg";
// import LazyBGImage from "./LazyBackgroundImage/LazyBGImage";

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
const products = [
  {
    header: "Solutions",
    groupSubs: [
      "For Mobile Operators",
      "For Fixed Line Operators",
      "For MVNO/IMS Solutions",
      "Smart City",
      "NGN/IMS Solutions",
    ],
  },
  {
    header: "Products",
    groupSubs: [
      "CS Core",
      "Intelligent Network & VAS",
      "Messaging",
      "NGN/IMS Equipment",
      "Roaming",
      "Customer Care",
    ],
  },
  {
    header: "Company",
    groupSubs: ["About Us", "Our Partners"],
  },
];
function Footer() {
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);
  const { Panel } = Collapse;

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {/* <LazyBGImage src="../../images/pexels1.jpg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-2">
            Footer Heading
          </div>
          <div className="text-gray-400 mb-4">
            This is a paragraph of text that can provide more information about my website.
          </div>
          <a className="text-white hover:text-gray-400" href="#">Learn more</a>
        </div>
      </LazyBGImage> */}
      {!isTablet && (
        <footer
          className="bg-local bg-cover bg-center mt-[85px] pt-[36px]"
          style={{ backgroundImage: `url(${Pexel1})` }}
        >
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
            <Contact />
             <p className="mt-[50px] text-sm text-white">
              ©️BBDH, 2023. All rights reserved
            </p>
          </div>
        </footer>
      )}

      {isTablet && (
        <footer
          className="bg-local bg-cover bg-center mt-[85px] pt-[36px]"
          style={{ backgroundImage: `url(${Pexel1})` }}
        >
          <div className="grid grid-cols-2 gap-2  px-[15px] laptop:grid-cols-4">
            {products.map((product) => (
              <div className="mt-[10px] leading-loose">
                <p className="text-[20px] text-white font-bold font-sans mb-[10px]">
                  {product.header}
                </p>
                {product.groupSubs.map((item) => (
                  <a
                    href="www.google.com"
                    className="block text-[14px] underline text-white font-normal font-sans"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
            <Contact />
            <p className="mt-[50px] text-sm text-white">
              ©️BBDH, 2023. All rights reserved
            </p>
          </div>
        </footer>
      )}
    </>
  );
}
export default Footer;
