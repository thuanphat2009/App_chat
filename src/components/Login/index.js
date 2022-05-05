import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { GooglePlusOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase, { auth } from "../../firebase/confiq";
import { addDocument } from "../../firebase/service";
import "./styles.css";

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const handleFBLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
      });
    }
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
