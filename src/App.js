import React, { useState } from "react";
import { Button, Menu, Row, Col, Icon } from "antd";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import "./LESS/styles.less";

import { ReactComponent as AppIcon } from "./assets/app_icon.svg";

function App() {
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
          groupItems: [
            { key: "1", name: "Item 1" },
            { key: "2", name: "Item 2" },
            { key: "3", name: "Item 3" }
          ]
        }
      ]
    },
    {
      iconType: "inbox",
      name: "Inbox",
      isSubMenu: true,
      subMenuItems: [
        {
          key: "g1",
          iconType: "home",
          name: "Group 1",
          isGroup: true,
          groupItems: [
            { key: "4", name: "Item 1" },
            { key: "5", name: "Item 2" },
            { key: "6", name: "Item 3" },
            { key: "7", name: "Item 4" },
            { key: "8", name: "Item 5" }
          ]
        }, 
        {
          key: "g2",
          iconType: "home",
          name: "Group 2",
          isGroup: true,
          groupItems: [
            { key: "9", name: "Item 1" },
            { key: "10", name: "Item 2" },
          ]
        }
      ]
    },
    { iconType: "desktop", name: "Desktop", isSubMenu: false }
  ];

  return (
    <Row gutter={0}>
      <Col xs={24} md={5} lg={3}>
        <LeftMenu
          theme="dark" // light or dark
          mode="inline" // inline or vertical
          menuItems={menuItems} // array of menuItems
          hasToggle={true} // add option to toggle/collapse menu
          appTitle="WeldTrac" // title of app
          appIcon={<AppIcon />}
        />
      </Col>
    </Row>
  );
}

export default App;
