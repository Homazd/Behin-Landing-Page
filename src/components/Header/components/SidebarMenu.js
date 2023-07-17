import * as React from "react";
import { Link } from "gatsby";
// Ant Design Components
import { Menu, Drawer, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
// Hooks
import { useState } from "react";
import { products } from "../../Assets/Products";

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);
  const placement = "left";

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
    console.log("open the Drawer", open);
  };

  // RenderMenuItems function that recursively renders menu items and sub-menu items using a Menu.Item component for leaf nodes and a Menu.SubMenu component for nodes with groupSubs.

  const renderMenuItems = (products) =>
    products.map((item) =>
      item.groupSubs ? (
        <Menu.SubMenu key={item.header} title={item.header}>
          {renderMenuItems(item.groupSubs)}
        </Menu.SubMenu>
      ) : (
        <Menu.Item key={item.header}>
          <Link to={item.link}>{item.header}</Link>
        </Menu.Item>
      )
    );
  return (
    <>
      {console.log("in mobile view")}
      <div className="pt-[3px] flex">
        <Button
          type="text"
          className="text-slate-50 h-[26.28px] text-[12px] flex p-0 b-0"
          onClick={showDrawer}
        >
          <p>Company</p>
        </Button>
        <div className="grid place-items-center h-[24px]">
          <DownOutlined className="pl-[8px]" style={{ fontSize: "10px" }} />
        </div>
      </div>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width="250px"
      >
        <Menu mode="inline" defaultSelectedKeys={["products"]}>
          {renderMenuItems(products)}
        </Menu>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
