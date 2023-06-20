import * as React from "react";
// Antd Components
import { Menu, Divider, Dropdown, Space } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
// Hooks
import { useState, useEffect } from "react";
// Images
import logo from "../../images/logo.png";
import telecom from "../../images/telecom.png";
import enterprise from "../../images/enterprise.png";
import safety from "../../images/safety.png";

import Pointer from "./components/Pointer";
function Navigation() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isDesktop && (
        <>
          <div className="grid grid-cols-9 text-center w-[1170px] h-15 shadow-sm mx-auto">
            <div className="col-span-1">
              <img
                className="w-[100px] h-[70px] text-center"
                src={logo}
                alt="logo"
              />
            </div>
            <div className="col-span-8 grid grid-cols-10 gap-4 place-content-center">
              <div className="col-start-5 col-span-2 flex">
                <img
                  className="w-[50px] h-[50px] text-center mx-1 pt-2"
                  src={telecom}
                  alt="telecom"
                />
                <div className="relative">
                  <Dropdown
                    dropdownRender={(menu) => (
                      <div className="w-screen h-64 bg-slate-100 absolute left-[-950px] top-[25px] px-[80px]">
                        <Pointer />
                      </div>
                    )}
                  >
                    <a href="www.google.com" onClick={(e) => e.preventDefault()}>
                      <Space className="pt-[15px] text-[15px] font-sans font-normal text-gray-700 cursor-pointer">
                        For Telecom Carriers
                        <DownOutlined
                          className="pb-[20px]"
                          style={{ fontSize: "14px" }}
                        />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                {/* <span className="pt-[15px] text-[15px] font-sans font-normal text-gray-700">
                  For Telecom Carriers
                </span> */}
              </div>
              <div className="col-span-2 flex">
                <img
                  className="w-[50px] h-[50px] text-center mx-2 pt-2"
                  src={enterprise}
                  alt="enterprise"
                />
                <span className="pt-[15px] text-[15px] font-sans font-normal text-gray-700">
                  For Enterprises
                </span>
              </div>
              <div className="col-span-2 flex">
                <img
                  className="w-[40px] h-[40px] text-center mx-[3px] pt-2"
                  src={safety}
                  alt="safety"
                />
                <span className="pt-[12px] text-[15px] font-sans font-normal text-gray-700">
                  For Integrated Safety
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      {!isDesktop && (
        <>
          <div className="grid grid-cols-3 h-15 items-center shadow-sm relative mx-[10px] py-[10px]">
            <div className="mr-4 col-span-1">
              <MenuOutlined
                style={{ fontSize: 25 }}
                onClick={toggleCollapsed}
              />
            </div>
            <div className="hidden md:block">
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["home"]}
              >
                <Menu.Item key="home">For Telecom Carriers</Menu.Item>
                <Menu.Item key="about">For Enterprises</Menu.Item>
                <Menu.Item key="contact">For Integrated Safety</Menu.Item>
              </Menu>
            </div>

            <div className="text-center col-span-1 grid justify-items-center">
              <img
                className="w-15 h-14 text-center tablet:w-20 tablet:h-16"
                src={logo}
                alt="logo"
              />
            </div>
          </div>

          <div className={`md:hidden ${collapsed ? "hidden" : "block"}`}>
            <Menu theme="light" mode="vertical" defaultSelectedKeys={["home"]}>
              <Menu.Item key="home">For Telecom Carriers</Menu.Item>
              <Menu.Item key="about">For Enterprises</Menu.Item>
              <Menu.Item key="contact">For Integrated Safety</Menu.Item>
            </Menu>
          </div>
        </>
      )}
      <Divider className="m-0 p-0" />
    </>
  );
}
export default Navigation;
