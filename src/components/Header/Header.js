import * as React from "react";
import { Link } from "gatsby";
// Hooks
import { useState, useEffect } from "react";
// Components
import SidebarMenu from "./components/SidebarMenu";
// antd components
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Assets
import { headerProducts } from "../Assets/Products";

function Header() {
  const [isTablet, setIsTablet] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );
  const [isLargeLaptop, setIsLargeLaptop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1440 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeLaptop(window.innerWidth >= 1440);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
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
                      <div className="self-center bg-opacity-90 w-[1200px] mx-auto h-[400px] relative place-self-center top-[77px] bg-white">
                        <div className="grid grid-cols-5 gap-4 relative px-[80px] mx-auto">
                          {headerProducts.map((product) => (
                            <div className="mt-[50px] leading-loose">
                              <p className="text-[18px] font-bold mb-[20px]">
                                {product.header}
                                {product.groupSubs.map((item) => (
                                  <Link
                                    to={item.link}
                                    className="block text-[13px] underline text-gray-400 font-normal"
                                    key={item.id}
                                  >
                                    {item.header}
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
                  <div className="justify-center relative tablet:w-[600px] laptop:w-[900px] h-[800px] laptop:h-78">
                    <div className="bg-white bg-opacity-90 relative top-[85px] px-[80px]">
                      <div className="grid grid-cols-5 gap-6">
                        {headerProducts.map((product) => (
                          <div className="py-[10px] leading-loose">
                            <p className="text-[16px] font-bold mb-[20px]">
                              {product.header}
                              {product.groupSubs.map((item) => (
                                <Link
                                  to={item.link}
                                  className="block text-[10px] laptop:text-[14px] underline text-gray-400 font-normal"
                                  key={item.id}
                                >
                                  {item.header}
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
            {!isTablet && <SidebarMenu />}
          </div>
          <div className="flex-none w-[74px]  text-center border-x border-x-slate-100 px-[5px]">
            <span className="text-[10x] tablet:text-[14px]">
              <Link to="/contact">Contacts</Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
