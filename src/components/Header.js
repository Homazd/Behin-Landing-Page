import * as React from "react";
import { useState } from "react";
// antd components
import { Dropdown, Menu, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";

// const items = [
//   {
//     label: "Company",
//     key: "SubMenu",
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           {
//             label: "Option 1",
//             key: "setting:1",
//           },
//           {
//             label: "Option 2",
//             key: "setting:2",
//           },
//         ],
//       },
//     ],
//   },
// ];

function Header() {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };

  const menu = (
    <Menu className="bg-slate-50 w-screen">
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
  // const sideMenu = (
  //   <Menu className="bg-slate-50 tablet:w-screen">
  //     <Row gutter={[16, 16]}>
  //       <Col span={6}>
  //         <Menu.Item style={{ fontSize: "25px" }} key="1">
  //           Soultions
  //         </Menu.Item>
  //         <Menu.Item key="2">Column 1 Option 2</Menu.Item>
  //         <Menu.Item key="3">Column 1 Option 3</Menu.Item>
  //       </Col>
  //       <Col span={6}>
  //         <Menu.Item style={{ fontSize: "25px" }} key="4">
  //           Products
  //         </Menu.Item>
  //         <Menu.Item key="5">Column 2 Option 2</Menu.Item>
  //         <Menu.Item key="6">Column 2 Option 3</Menu.Item>
  //       </Col>
  //       <Col span={6}>
  //         <Menu.Item style={{ fontSize: "25px" }} key="7">
  //           Company
  //         </Menu.Item>
  //         <Menu.Item key="8">Column 3 Option 2</Menu.Item>
  //         <Menu.Item key="9">Column 3 Option 3</Menu.Item>
  //       </Col>
  //       <Col span={4}>
  //         <Menu.Item style={{ fontSize: "25px" }} key="10">
  //           Company
  //         </Menu.Item>
  //         <Menu.Item key="11">Column 3 Option 2</Menu.Item>
  //         <Menu.Item key="12">Column 3 Option 3</Menu.Item>
  //       </Col>
  //     </Row>
  //   </Menu>
  // );

  return (
    <div className="flex bg-blue-800 text-slate-50 h-[26.28px]">
      <div className="w-3/5">
        <span className="font-bold text-sm text-center invisible md:visible">
          Impossible Just Takes Longer To Design
        </span>
      </div>
      <div className="w-4/15 items-center border-l border-l-slate-50 px-[13px] pt-[3px]">
        <Dropdown
          placement="bottom"
          overlay={menu}
          className="bg-blue-800 flex"
        >
          <a
            className="ant-dropdown-link text-[12px] font-sans"
            onClick={(e) => e.preventDefault()}
          >
            Company
            <DownOutlined
              className="pt-[5px] pl-[8px]"
              style={{ fontSize: "6px" }}
            />
          </a>
        </Dropdown>
      </div>
      <div className="w-2/15 text-center border-x border-x-slate-100 px-[5px]">
        <span className="text-[12px]">Contacts</span>
      </div>
    </div>
  );
}

export default Header;
