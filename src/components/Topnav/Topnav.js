import React from "react";
import { Button, Menu, Row, Col, Icon } from "antd";

function Topnav(props) {

  return (
    <Menu theme={props.theme} mode={props.mode}>
        {props.menuItems.map(menuItem => (
            <Menu.Item>
                <Icon type={menuItem.iconType} />
                <span>{menuItem.name}</span>
            </Menu.Item>
        ))}
    </Menu>
  );
}

export default Topnav;
