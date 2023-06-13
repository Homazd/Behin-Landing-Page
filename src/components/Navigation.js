import * as React from "react";
// Antd Components
import { Menu, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// Hooks
import { useState, useEffect } from "react";

const menu = (
  <Menu className="w-screen h-80 flex content-center justify-center">
    <div className="w-1">This is the full-width content.</div>
  </Menu>
);

function Navigation() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isDesktop && (
        <>
          <div className="grow text-center">01</div>
          <div className="flex-none w-14">02</div>
          <div className="flex-none w-14">03</div>
          <div className="flex-none w-14">04</div>
        </>
      )}
      {!isDesktop && (
        <>
          <div className="flex items-center justify-between shadow-sm">
            <div className="flex items-center">
              <div className="mr-4">
                <MenuOutlined onClick={toggleCollapsed} />
              </div>
              <div className="hidden md:block">
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={["home"]}
                >
                  <Menu.Item key="home">Home</Menu.Item>
                  <Menu.Item key="about">About</Menu.Item>
                  <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
              </div>
            </div>
            <div className="hidden md:block">Logo</div>
          </div>
          <div className={`md:hidden ${collapsed ? "hidden" : "block"}`}>
            <Menu theme="light" mode="vertical" defaultSelectedKeys={["home"]}>
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="about">About</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
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
