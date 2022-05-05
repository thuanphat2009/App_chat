import React from "react";
import { Collapse, Typography, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function ListRoom() {
  return (
    <div className="sideBar">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Danh sách các phòng" key="1">
          <Typography.Link className="sidebarRoom">Room 1</Typography.Link>
          <Typography.Link className="sidebarRoom">Room 2</Typography.Link>
          <Typography.Link className="sidebarRoom">Room 3</Typography.Link>
          <Button
            type="text"
            className="sidebarBtn"
            ghost
            icon={<PlusOutlined />}
          >
            Thêm phòng
          </Button>
        </Panel>
      </Collapse>
    </div>
  );
}

export default ListRoom;
