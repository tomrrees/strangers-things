import { Profile, Posts, NavBar, LogOut, Post, Register } from "components";
import Login from "components/Login";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMe } from "api/user";

export default function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Posts />} />
        <Route path="/logout" element={<LogOut />} />
        {/* <Route path="/post" element={<Post />} /> */}
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </div>
  );
}
