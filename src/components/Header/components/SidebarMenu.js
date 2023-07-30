import * as React from "react";
import { Link } from "gatsby";
// Ant Design Components
import { Menu, Drawer, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
// Hooks
import { useState } from "react";
import { products } from "../../Assets/Products";

function getItem(label, key, children) {
  return {
    key,
    children,
    label,
  };
}

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);
  const placement = "left";

  const onClose = () => {
    setOpen(false);
    console.log("open is:", open);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  
  const items = products.map((productItem) =>
    getItem(
      productItem.header,
      productItem.id,
      productItem.groupSubs.map((innerItem) =>
        getItem(
          <Link to={innerItem.link}>{innerItem.header}</Link>,
          innerItem.header
        )
      )
    )
  );

  return (
    <>
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
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default SidebarMenu;
