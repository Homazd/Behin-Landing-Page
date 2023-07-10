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
            <div className="col-end-10 col-span-3 grid grid-cols-5 gap-4 place-content-center text-blue-800 font-semibold ">
              <div className="col-start-3 col-span-1 hover:text-cyan-400 ">
                <Link to="/products/fiveGC">
                  {" "}
                  <span>5G</span>
                </Link>
              </div>
              <div className="col-span-1 flex hover:text-cyan-400 ">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </div>
              <div className="col-span-1 flex hover:text-cyan-400 ">
                <span>Blog</span>
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
            <Menu theme="light" mode="vertical" defaultSelectedKeys={["home"]}>
              <Menu.Item key="home">5G</Menu.Item>
              <Menu.Item key="about">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="contact">Blog</Menu.Item>
            </Menu>
          </div>
        </>
      )}
      <Divider className="m-0 p-0" />
    </>
  );
}
export default Navigation;
