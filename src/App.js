import React, { useState } from "react";
import { Button, Menu, Row, Col, Icon } from "antd";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import "./App.css";

function App() {
  // const [toggleCollapsed, setToggleCollapsed] = useState(true);

  // const handleToggleClick = () => {
  //   setToggleCollapsed(!toggleCollapsed);
  // }

  var menuItems = [
    {
      key: "sub1",
      iconType: "home",
      name: "Home",
      isSubMenu: true,
      subMenuItems: [
        {
          key: "g1",
          iconType: "home",
          name: "Group 1",
          isGroup: true,
          groupItems: [{ key: "1", name: "Item 1" },{ key: "2", name: "Item 2" },{ key: "3", name: "Item 3" }]
        }
      ]
    },
    { iconType: "inbox", name: "Inbox", 
    isSubMenu: true,
    subMenuItems: [
      {
        key: "g1",
        iconType: "home",
        name: "Group 1",
        isGroup: true,
        groupItems: [{ key: "4", name: "Item 1" },{ key: "5", name: "Item 2" },{ key: "6", name: "Item 3" }]
      }
    ] },
    { iconType: "desktop", name: "Desktop", isSubMenu: false }
  ];

  return (
    <Row gutter={0}>
      <Col xs={24} md={5} lg={4} xl={3}>
        <LeftMenu theme="dark" mode="vertical" menuItems={menuItems} />
      </Col>
    </Row>
  );
}

export default App;
