import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/user";

export default function Register({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          if (password === confirmPassword && password.length > 8) {
            e.preventDefault();
            const result = await createUser(userName, password);
            console.log(result.data);
            setToken(result.data.token);
            localStorage.setItem("token", result.data.token);
            console.log(result.data.token);
          } else {
            if (password !== confirmPassword) {
              alert(`Passwords do not match.`);
            }
            if (password.length < 8) {
              alert(`Password is too short.`);
            }
          }
        }}
      >
        <input
          placeholder="Username"
          value={userName}
          required={true}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
