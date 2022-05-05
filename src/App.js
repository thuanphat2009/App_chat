import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ChatRoom />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default App;
