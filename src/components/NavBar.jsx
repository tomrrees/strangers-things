import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Posts</Link>
        {/* <Link to="/post">Post</Link> */}
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Log Out</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}
