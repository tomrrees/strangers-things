import { Profile, Posts, NavBar, LogOut } from "components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Posts />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </div>
  );
}
