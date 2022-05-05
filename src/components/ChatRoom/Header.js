import React, { useContext } from "react";
import { PageHeader, Button, Image } from "antd";
import { auth } from "../../firebase/confiq";
import { AuthContext } from "../../Context/AuthProvider";
import "./styles.css";

function Header() {
  //   useEffect(() => {
  //     db.collection("users").onSnapshot((snapshot) => {
  //       const data = snapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //     });
  //   }, []);
  const {
    user: { displayName, email, uid, photoURL },
  } = useContext(AuthContext);

  return (
    <PageHeader
      style={{ width: "100%", backgroundColor: "black" }}
      ghost={false}
      avatar={{
        src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/279521001_716773573072298_7760740432119588021_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=tSlduWXBbOkAX_T6dfT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIR2Q5MGk0vYoegSEIxMS1U_2zKjD-AxniofnH6eZYgKw&oe=629A318D",
      }}
      extra={[
        <p className="nameHeader">
          xin chào <span>{displayName}</span>
        </p>,
        <Image style={{ borderRadius: 50 }} src={photoURL} key="2" />,
        <Button ghost onClick={() => auth.signOut()} key="1">
          Đăng xuất
        </Button>,
      ]}
    />
  );
}

export default Header;
