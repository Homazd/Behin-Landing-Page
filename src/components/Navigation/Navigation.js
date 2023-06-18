import * as React from "react";
// Antd Components
import { Menu, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// Hooks
import { useState, useEffect } from "react";
// Images
import logo from "../../images/logo.png";

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
          <div className="grid grid-cols-7 text-center w-[1170px] h-15 shadow-sm mx-auto">
            <div className="col-span-1">
              <img
                className="w-[100px] h-[70px] text-center"
                src={logo}
                alt="logo"
              />
            </div>
            <div className="col-span-6 grid grid-cols-9 gap-6 place-content-center">
              <div className="col-start-5 col-span-1">Home</div>
              <div className="col-span-1">About</div>
              <div className="col-span-1">Contact</div>
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
              <img className="w-15 h-14 text-center" src={logo} alt="logo" />
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
      {/* <div className="flex mx-auto"> */}

      {/* <div className="h-20 bg-slate-100 py-5 mx-auto">
        <Row justify="center" className="my-auto">
          <Col span={8}>
            <div className="text-xl font-sans">Hounam Data</div>
          </Col>
          <div className="flex justify-end">
          <Col span={2}>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link font-sans px-2"
                onClick={(e) => e.preventDefault()}
              >
                For Telecom Carriers
              </a>
            </Dropdown>
          </Col>
          <Col span={2}>
            {" "}
            <div className="font-sans">For Enterprises</div>
          </Col>
          <Col span={2}>
            {" "}
            <div className="font-sans">For Integrated Safety</div>
          </Col>
          </div>
        </Row>
      </div> */}
      <Divider className="m-0 p-0" />
    </>
  );
}
export default Navigation;
