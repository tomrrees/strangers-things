import { Profile, Posts, NavBar, LogOut, Post } from "components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Posts />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}
