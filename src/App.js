import React, { useState } from "react";
import { Button, Menu, Row, Col, Icon } from "antd";
import "./App.css";

function App() {

  const [toggleCollapsed, setToggleCollapsed] = useState(true);

  const handleToggleClick = () => {
    setToggleCollapsed(!toggleCollapsed);
  }

  return (
    <Row gutter={0}>
      <Col xs={24}>
        <Button type="primary" onClick={() => handleToggleClick()}>
          <Icon type="menu-fold"/>
        </Button>
        <Menu 
          mode="horizontal" 
          theme="dark"
          inlineCollapsed={toggleCollapsed}
        >
          <Menu.Item><Icon type="home"/></Menu.Item>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </Menu>
      </Col>
      <Button type="primary">Test Button</Button>

    </Row>
  );
}

export default App;
