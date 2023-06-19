import * as React from "react";
import { Menu } from "antd";
import { useState } from "react";

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Solutions", "sub1", [
    getItem(
      <a href="www.google.com" className="text-slate-500 text-[14px] block font-sans font-normal hover:text-sky-600">For Mobile Operators</a>,
      null,
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      <a href="www.google.com" className="text-slate-500 text-[14px] block font-sans font-normal hover:text-sky-600">For Fixed Line Operators</a>,
      null,
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
    getItem(
      <a href="www.google.com" className="text-slate-500 text-[14px] block font-sans font-normal hover:text-sky-600">For MVNO/MVNE</a>,
    ),
    getItem(
      <a href="www.google.com" className="text-slate-500 text-[14px] block font-sans font-normal hover:text-sky-600">Smart City</a>,
    ),
    getItem(
      <a href="www.google.com" className="text-slate-500 text-[14px] block font-sans font-normal hover:text-sky-600">NGN/IMS Solutions</a>,
    ),
    getItem(
      <a href="www.google.com" className="text-slate-500 text-[14px] block font-sans font-normal hover:text-sky-600">Private LTE/5G</a>,
    ),
    getItem(
      <a href="www.google.com" className="text-slate-500 text-[14px] block font-sans font-normal hover:text-sky-600">Enterprise UC solutions</a>,
    ),
  ]),
  getItem("Company", "sub2", [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),
  getItem("News", "sub4", [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

function SidebarMenu() {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="mt-1px">
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: "230px",
          top: "50px",
          left: "15px",
          position: "absolute",
        }}
        items={items}
      />
    </div>
  );
}

export default SidebarMenu;
