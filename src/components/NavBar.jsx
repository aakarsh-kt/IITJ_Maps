import React from "react";
import DrawerComp from "./Drawer";
import { Drawer } from "antd";
import {
  EditFilled,
  CloudFilled,
  FireFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
export default function () {
  const [open, setOpen] = React.useState(false);
  function handleDrawer() {
    setOpen(!open);
  }
  return (
    <div className="navbar--cont">
      <nav>
        <ul className="navbar--list">
          <EditFilled className="icon" />
          <CloudFilled className="icon" />
          <FireFilled className="icon" />
          <Avatar
            icon={<UserOutlined className="icon" />}
            onClick={handleDrawer}
            style={{ cursor: "pointer" }}
          />
          <Drawer
            // title="Basic Drawer"
            placement={"right"}
            closable={true}
            onClose={handleDrawer}
            open={open}
            // key={placement}
          >
            <DrawerComp />
          </Drawer>
        </ul>
      </nav>
    </div>
  );
}
