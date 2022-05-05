import React from "react";
import { Row, Col } from "antd";
import ListRoom from "./ListRoom";

function Sidebar() {
  return (
    <Row>
      <Col span={24}>
        <ListRoom />
      </Col>
    </Row>
  );
}

export default Sidebar;
