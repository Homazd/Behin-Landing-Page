import * as React from "react";
import { useState, useEffect } from "react";
import SidebarMenu from "./components/SidebarMenu";
// antd components
import {
  Dropdown,
  Menu,
  Drawer,
  Button,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

function Header() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [isFullScreen, setIsFullScreen] = useState(false);
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
  const handleOnCompany = (e) => {
    e.preventDefault();
    setIsFullScreen(true);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        {isFullScreen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-75 z-50">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Full Screen Content</h1>
                <p className="text-gray-500">
                  This is some content that takes up the full screen.
                </p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => setIsFullScreen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Menu.Item>
    </Menu>
  );

  
  return (
    <>
      {isLargeLaptop && (
        <div className="bg-sky-500 text-slate-50 h-[28.28px]">
          <div className="w-[1170px] mx-auto grow relative h-[28.28px]">
            <span className="font-normal text-[14px] invisible tablet:visible absolute left-1/3">
              Impossible Just Takes Longer To Design
            </span>
          </div>
        </div>
      )}
      {!isLargeLaptop && (
        <div className="flex relative bg-sky-500 text-slate-50 h-[28.28px]">
          <div className="grow relative h-[28.28px]">
            <span className="font-normal text-[14px] invisible tablet:visible absolute left-1/3">
              Impossible Just Takes Longer To Design
            </span>
          </div>
          <div className="flex-none w-[100px] h-[28.28px] items-center border-l border-l-slate-50 px-[13px]">
            {isTablet && (
              <div className="relative">
                <Dropdown
                  dropdownRender={(menu) => (
                    <div className="w-screen h-screen bg-white absolute left-[-620px] top-[80px] px-[80px]">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="mt-[50px] leading-loose">
                          <p className="text-[16px] font-bold font-sans mb-[20px]">
                            Solutions
                          </p>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Fixed Line Operators
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For MVNO/MVNE
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            Smart City
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            NGN/IMS Solutions
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            Private LTE/5G
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            Enterprise UC solutions
                          </a>
                        </div>
                        <div className="mt-[50px] leading-loose">
                          <p className="text-[16px] font-bold font-sans mb-[20px]">
                            Products
                          </p>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                        </div>
                        <div className="mt-[50px] leading-loose">
                          <p className="text-[16px] font-bold font-sans ">
                            Company
                          </p>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                        </div>
                        <div className="mt-[50px] leading-loose">
                          <p className="text-[16px] font-bold font-sans ">
                            News
                          </p>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                          <a
                            href="#"
                            className="block text-[12px] underline text-gray-400 font-normal font-sans"
                          >
                            For Mobile Operatore
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                >
                  <a onClick={(e) => e.preventDefault()}>
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
                    className="text-slate-50 h-[26.28px] text-[12px] font-sans flex p-0 b-0"
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
            <span className="text-[12px] tablet:text-[14px]">Contacts</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
