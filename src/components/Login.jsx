import React, { useState } from "react";
import { loginUser } from "api/user";

export default function Login({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function logOut() {
    localStorage.setItem("token", null);
  }

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(userName, password);
          console.log(result.data);
          if (result.success === false) {
            alert(result.error.message);
          } else {
            setToken(result.data.token);
            localStorage.setItem("token", result.data.token);
            alert(result.data.message);
          }
          console.log(result.data.token);
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
