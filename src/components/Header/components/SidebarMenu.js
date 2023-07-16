import * as React from "react";
import { Link } from "gatsby";

// Ant Design Components
import { Menu, Drawer, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Hooks
import { useState } from "react";

const drawerMenuItems = [
  {
    key: "Products",
    title: "Products",
    children: [
      { key: "5GC Core", title: "5GC Core", link: "/products/fiveGC" },
      { key: "EPC", title: "EPC", link: "/products/epc" },
    ],
  },
  { key: "Company", title: "Company", link: "/" },
];

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
    console.log("open the Drawer", open);
  };

  // RenderMenuItems function that recursively renders menu items and sub-menu items using a Menu.Item component for leaf nodes and a Menu.SubMenu component for nodes with children.

  const renderMenuItems = (items) =>
    items.map((item) =>
      item.children ? (
        <Menu.SubMenu key={item.key} title={item.title}>
          {renderMenuItems(item.children)}
        </Menu.SubMenu>
      ) : (
        <Menu.Item key={item.key}>
          <Link to={item.link}>{item.title}</Link>
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
          {renderMenuItems(drawerMenuItems)}
        </Menu>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
