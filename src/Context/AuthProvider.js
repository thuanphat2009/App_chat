import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { auth } from "../firebase/confiq";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        navigate("/");
      } else {
        navigate("/login");
      }
    });
    // Clean Function
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
