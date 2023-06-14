import * as React from "react";
import { useState, useEffect } from "react";
import SidebarMenu from "./components/SidebarMenu";
// antd components
import { Dropdown, Menu, Row, Col, Drawer, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Header() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
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
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const menu = (
    <Menu>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Menu.Item style={{ fontSize: "25px" }} key="1">
            Soultions
          </Menu.Item>
          <Menu.Item key="2">Column 1 Option 2</Menu.Item>
          <Menu.Item key="3">Column 1 Option 3</Menu.Item>
        </Col>
        <Col span={6}>
          <Menu.Item style={{ fontSize: "25px" }} key="4">
            Products
          </Menu.Item>
          <Menu.Item key="5">Column 2 Option 2</Menu.Item>
          <Menu.Item key="6">Column 2 Option 3</Menu.Item>
        </Col>
        <Col span={6}>
          <Menu.Item style={{ fontSize: "25px" }} key="7">
            Company
          </Menu.Item>
          <Menu.Item key="8">Column 3 Option 2</Menu.Item>
          <Menu.Item key="9">Column 3 Option 3</Menu.Item>
        </Col>
        <Col span={4}>
          <Menu.Item style={{ fontSize: "25px" }} key="10">
            Company
          </Menu.Item>
          <Menu.Item key="11">Column 3 Option 2</Menu.Item>
          <Menu.Item key="12">Column 3 Option 3</Menu.Item>
        </Col>
      </Row>
    </Menu>
  );

  return (
    <div className="flex relative bg-sky-500 text-slate-50 h-[28.28px]">
      <div className="grow relative h-[28.28px] text-center">
        <span className="font-bold text-sm invisible tablet:visible absolute left-1/3">
          Impossible Just Takes Longer To Design
        </span>
      </div>
      <div className="flex-none w-[100px] h-[28.28px] items-center border-l border-l-slate-50 px-[13px]">
        {isTablet && (
          <div className="flex pt-[3px]">
            <Dropdown
              placement="bottom"
              menu={menu}
              className="grid place-items-center h-[24px]"
            >
              <a
                className="ant-dropdown-link text-[12px] font-sans"
                onClick={(e) => e.preventDefault()}
              >
                Company
              </a>
            </Dropdown>
            <DownOutlined
              className=" h-[24px] pt-[8px] pl-[8px]"
              style={{ fontSize: "8px" }}
            />
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
                  className="pl-[8px] "
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
        <span className="text-[12px]">Contacts</span>
      </div>
    </div>
  );
}

export default Header;
