import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { GooglePlusOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase, { auth } from "../../firebase/confiq";
import "./styles.css";

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const handleFBLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  return (
    <div className="containerLogin">
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col span={8}>
          <Title className="titleLogin">App-chat</Title>
          <Button
            icon={<GooglePlusOutlined />}
            size="large"
            ghost
            className="buttonLogin"
          >
            Đăng nhập bằng Google
          </Button>
          <Button
            icon={<FacebookOutlined />}
            size="large"
            ghost
            className="buttonLogin"
            onClick={handleFBLogin}
          >
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
