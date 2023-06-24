import * as React from "react";
import { Link } from "gatsby";
// Hooks
import { useState, useEffect } from "react";
// Components
import SidebarMenu from "./components/SidebarMenu";
// antd components
import { Dropdown, Drawer, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Header() {
  const [open, setOpen] = useState(false);
  // const [isFullScreen, setIsFullScreen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);
  const [isLargeLaptop, setIsLargeLaptop] = useState(window.innerWidth >= 1440);

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
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeLaptop(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // const handleOnCompany = (e) => {
  //   e.preventDefault();
  //   setIsFullScreen(true);
  // };
  // const menu = (
  //   <Menu>
  //     <Menu.Item>
  //       {isFullScreen && (
  //         <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-75 z-50">
  //           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
  //             <div className="bg-white rounded-lg p-8 shadow-lg">
  //               <h1 className="text-2xl font-bold mb-4">Full Screen Content</h1>
  //               <p className="text-gray-500">
  //                 This is some content that takes up the full screen.
  //               </p>
  //               <button
  //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
  //                 onClick={() => setIsFullScreen(false)}
  //               >
  //                 Close
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <>
      {isLargeLaptop && (
        <div className="bg-sky-500 text-slate-50 h-[28.28px]">
          <div className="flex w-[1170px] mx-auto h-[28.28px] text-center relative">
            <span className="font-normal text-[14px] invisible laptop:visible absolute inset-x-0">
              Behin Baygan Dade Hounam
            </span>
            <div className="absolute right-0 flex">
            <div className="relative border-l border-l-slate-50 px-3">
              <Dropdown
                dropdownRender={(menu) => (
                  <div className="w-screen h-screen bg-white absolute left-[-620px] laptop:left-[-900px] top-[80px] px-[80px]">
                    <div className="grid grid-cols-4 gap-4">
                      {products.map((product) => (
                        <div className="mt-[50px] leading-loose">
                          <p className="text-[16px] font-bold mb-[20px]">
                            {product.header}
                            {product.groupSubs.map((item) => (
                              <a
                                href="www.google.com"
                                className="block text-[12px] underline text-gray-400 font-normal font-sans"
                              >
                                {item}
                              </a>
                            ))}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              >
                <a href="www.google.com" onClick={(e) => e.preventDefault()}>
                  <Space className="text-[14px]">
                    Company
                    <DownOutlined
                      className="pb-[5px]"
                      style={{ fontSize: "10px" }}
                    />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="w-[74px]  text-center border-x border-x-slate-100 px-[10px]">
              <span className="text-[12px] tablet:text-[14px]">
                <Link to="/contact">Contacts</Link>
              </span>
            </div>
            </div>
          </div>
        </div>
      )}
      {!isLargeLaptop && (
        <div className="flex relative bg-sky-500 text-slate-50 h-[28.28px]">
          <div className="grow relative h-[28.28px]">
            <span className="font-normal text-[14px] invisible tablet:visible tablet:absolute left-1/2">
              Behin Baygan Dade Hounam
            </span>
          </div>
          <div className="flex-none w-[100px] h-[28.28px] items-center border-l border-l-slate-50 px-[13px]">
            {isTablet && (
              <div className="relative">
                <Dropdown
                  dropdownRender={(menu) => (
                    <div className="w-screen h-screen bg-white absolute left-[-620px] laptop:left-[-900px] top-[80px] px-[80px]">
                      <div className="grid grid-cols-4 gap-4">
                        {products.map((product) => (
                          <div className="mt-[50px] leading-loose">
                            <p className="text-[16px] font-bold mb-[20px]">
                              {product.header}
                              {product.groupSubs.map((item) => (
                                <a
                                  href="www.google.com"
                                  className="block text-[12px] underline text-gray-400 font-normal font-sans"
                                >
                                  {item}
                                </a>
                              ))}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                >
                  <a href="www.google.com" onClick={(e) => e.preventDefault()}>
                    <Space className="text-[14px]">
                      Company
                      <DownOutlined
                        className="pb-[5px]"
                        style={{ fontSize: "10px" }}
                      />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            )}
            {!isTablet && (
              <>
                <div className="pt-[3px] flex">
                  <Button
                    type="text"
                    className="text-slate-50 h-[26.28px] text-[12px] flex p-0 b-0"
                    onClick={showDrawer}
                  >
                    <p>Company</p>
                  </Button>
                  <div className="grid place-items-center h-[24px]">
                    <DownOutlined
                      className="pl-[8px]"
                      style={{ fontSize: "10px" }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <Drawer
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
            width="250px"
          >
            <SidebarMenu />
          </Drawer>
          <div className="flex-none w-[74px]  text-center border-x border-x-slate-100 px-[5px]">
            <span className="text-[14px] tablet:text-[14px]">
              <Link to="/contact">Contacts</Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
