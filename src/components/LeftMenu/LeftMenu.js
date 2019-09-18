import React from "react";
import { Button, Menu, Row, Col, Icon } from "antd";

import styles from "./LeftMenu.module.scss";

const LeftMenu = props => {
  // Create submenu component
  const { SubMenu } = Menu;

  // Show that click is working
  const handleClick = e => {
    console.log("click ", e);
  };

  return (
    <Row>
      {/* Full height column */}
      <Col xs={24} className={styles.LeftMenuContainer}>
        <Menu
          onClick={handleClick}
          theme={props.theme}
          mode={props.mode}
          defaultSelectedKeys={["home"]}
          defaultOpenKeys={["sub1"]}
        >
          {/* Map menuItems */}
          {props.menuItems.map(menuItem => (

            // If there is a submenu, display
            menuItem.isSubMenu 
            ? 
            <SubMenu
              key={menuItem.key}
              title={
                <span>
                  <Icon type={menuItem.iconType} />
                  <span>{menuItem.name}</span>
                </span>
              }
            >

              {/* Map subMenuItems */}
              {menuItem.subMenuItems.map(subMenuItem => (

                // If there is an Item Group, display
                subMenuItem.isGroup
                ?
                
                <Menu.ItemGroup key={subMenuItem.key} title={subMenuItem.name}>
                  {/* Map groupItems */}
                  {subMenuItem.groupItems.map(groupItem => (
                    <Menu.Item key={groupItem.key}>{groupItem.name}</Menu.Item>
                  ))}
                </Menu.ItemGroup>

                // If there is no Item Group,
                :
                <Menu.Item key="1">{subMenuItem.name}</Menu.Item>
              ))}
            </SubMenu>

            // If there is no submenu, display menu item
            : 
            <Menu.Item>
              <Icon type={menuItem.iconType} />
              {menuItem.name}
            </Menu.Item>
          ))}
        </Menu>
      </Col>
    </Row>
  );
};

export default LeftMenu; 

{
  /*
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
*/
}
