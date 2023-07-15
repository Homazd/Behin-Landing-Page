import * as React from "react";
import { Link } from "gatsby";

// Ant Design Components
import { Menu, Drawer } from "antd";
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
      {/* <SidebarMenu /> */}
    </Drawer>
  );
};

export default SidebarMenu;
