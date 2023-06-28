import * as React from "react";
import { Link } from "gatsby";
// Hooks
import { useState, useEffect } from "react";
// Components
import SidebarMenu from "./components/SidebarMenu";
// antd components
import { Dropdown, Drawer, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
// Assets
import { products } from "../Assets/Products";


function Header() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);
  const [isLargeLaptop, setIsLargeLaptop] = useState(window.innerWidth >= 1440);


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
  return (
    <>
      {isLargeLaptop && (
        <div className="bg-blue-900 text-slate-50 h-[28.28px]">
          <div className="flex w-[1170px] mx-auto h-[28.28px] text-center relative">
            <span className="font-normal text-[14px] invisible laptop:visible absolute inset-x-0 place-content-center pt-1">
              Behin Baygan Dade Hounam
            </span>
            <div className="absolute right-0 flex bottom-0 top-0">
              <div className="flex justify-center border-l border-l-slate-50 px-3">
                <Dropdown
                  dropdownRender={(menu) => (
                    <div className="flex items-stretch">
                      <div className="self-center w-[1000px] mx-auto h-72 relative place-self-center top-[77px] bg-white">
                        <div className="grid grid-cols-3 gap-4 relative px-[80px] mx-auto">
                          {products.map((product) => (
                            <div className="mt-[50px] leading-loose">
                              <p className="text-[18px] font-bold mb-[20px]">
                                {product.header}
                                {product.groupSubs.map((item) => (
                                  <Link
                                    to={item.link}
                                    className="block text-[14px] underline text-gray-400 font-normal"
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </p>
                            </div>
                          ))}
                        </div>
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
              <div className="w-[74px] hover:bg-blue-900 text-center border-x border-x-slate-100 px-[10px]">
                <span className="text-[12px] tablet:text-[14px]">
                  <Link to="/contact">Contacts</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLargeLaptop && (
        <div className="flex relative bg-blue-900 text-slate-50 h-[28.28px]">
          <div className="grow relative h-[28.28px]">
            <span className="font-normal text-[14px] invisible tablet:visible tablet:absolute left-1/2">
              Behin Baygan Dade Hounam
            </span>
          </div>
          <div className="flex-none w-[100px] h-[28.28px] items-center border-l border-l-slate-50 px-[13px]">
            {isTablet && (
              <Dropdown
                dropdownRender={(menu) => (
                  <div className="flex justify-center relative tablet:max-w-screen mx-auto tablet:w-[600px] laptop:w-[1000px] h-72 laptop:h-78">
                    <div className="bg-white relative top-[85px] px-[80px]">
                      <div className="grid grid-cols-3 gap-6">
                        {products.map((product) => (
                          <div className="py-[10px] leading-loose">
                            <p className="text-[16px] font-bold mb-[20px]">
                              {product.header}
                              {product.groupSubs.map((item) => (
                                <Link
                                  to={item.link}
                                  className="block text-[12px] laptop:text-[14px] underline text-gray-400 font-normal"
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </p>
                          </div>
                        ))}
                      </div>
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
