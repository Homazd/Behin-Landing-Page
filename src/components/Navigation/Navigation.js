import * as React from "react";
import { Link } from "gatsby";

// Antd Components
import { Menu, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// Hooks
import { useState, useEffect } from "react";
// Images
import logo from "../../images/logo.jpeg";

function Navigation() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1440 : false
  );
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  });
  
  // First I used Menu.Item but browser warns that: [antd: Menu] `children` will be removed in next major version. Please use `items` instead.
  // So it's changed to menuItems and a prop called items
  const menuItems = [
    {
      key: "Homa",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "5G",
      label: <Link to="/fiveGC">5G</Link>,
    },
    {
      key: "BBU",
      label: <Link to="/bbu">BBU</Link>,
    },
  ];
  return (
    <>
      {isDesktop && (
        <>
          <div className="grid grid-cols-9 place-content-center w-[1170px] h-[80px] shadow-sm mx-auto">
            <div className="col-start-1 col-end-4 flex">
              <Link to="/">
                <img
                  className="w-[70px] h-[70px] text-center"
                  src={logo}
                  alt="logo"
                />
              </Link>
              <Divider type="vertical" />
              <span className="text-blue-800 text-[14px] font-bold self-center">
                end-to-end Network Solution
              </span>
            </div>
            <div className="grid col-end-10 col-span-3 gap-4 content-center text-blue-800 font-semibold ">
              <div className="grid grid-cols-3">
                <div className="col-span-1 hover:text-cyan-400">
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </div>
                <div className="col-span-1 flex hover:text-cyan-400">
                  <Link to="/fiveGC">
                    {" "}
                    <span>5G</span>
                  </Link>
                </div>
                <div className="col-span-1 flex hover:text-cyan-400">
                  <Link to="/bbu">
                    <span>BBU</span>
                  </Link>
                </div>
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
            <div className="text-center col-span-1 grid justify-items-center">
              <Link to="/">
                <img
                  className="w-15 h-14 text-center tablet:w-[60px] tablet:h-[60px]"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
          </div>

          <div className={`md:hidden ${collapsed ? "hidden" : "block"}`}>
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={["home"]}
              items={menuItems}
            >
              {/* <Menu.Item key="home">5G</Menu.Item>
              <Menu.Item key="about">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="contact">Blog</Menu.Item> */}
            </Menu>
          </div>
        </>
      )}
      <Divider className="m-0 p-0" />
    </>
  );
}
export default Navigation;
