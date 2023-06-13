import { Divider } from "antd";
import { Dropdown, Menu } from "antd";
import * as React from "react";

const menu = (
  <Menu className="w-screen h-80 flex content-center justify-center">
    <div className="w-1">This is the full-width content.</div>
  </Menu>
);

function Navigation() {
  return (
    <>
    <div className="flex mx-auto">
      <div className="grow text-center">01</div>
      <div className="flex-none w-14">02</div>
      <div className="flex-none w-14">03</div>
      <div className="flex-none w-14">04</div>
    </div>
      {/* <div className="h-20 bg-slate-100 py-5 mx-auto">
        <Row justify="center" className="my-auto">
          <Col span={8}>
            <div className="text-xl font-sans">Hounam Data</div>
          </Col>
          <div className="flex justify-end">
          <Col span={2}>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link font-sans px-2"
                onClick={(e) => e.preventDefault()}
              >
                For Telecom Carriers
              </a>
            </Dropdown>
          </Col>
          <Col span={2}>
            {" "}
            <div className="font-sans">For Enterprises</div>
          </Col>
          <Col span={2}>
            {" "}
            <div className="font-sans">For Integrated Safety</div>
          </Col>
          </div>
        </Row>
      </div> */}
      <Divider className="m-0 p-0" />
    </>
  );
}
export default Navigation;
