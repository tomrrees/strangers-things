import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/user";

export default function Register() {
  const [userName, setUserName] = useState("Username");
  const [password, setPassword] = useState("Enter a password");
  const [confirmPassword, setConfirmPassword] = useState("Confirm Password");
  const [token, setToken] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          if (password === confirmPassword) {
            e.preventDefault();
            const result = await createUser(userName, password);
            console.log(result.data);
            setToken(result.data.token);
            localStorage.setItem("token", token);
            console.log(result.data.token);
          }
        }}
      >
        <input
          value={userName}
          required={true}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value={confirmPassword}
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
