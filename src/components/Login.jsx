import React from "react";

export default function Login() {
  const [token, setToken] = useState("");

  function logIn(username, password) {}

  function logOut() {
    localStorage.setItem("token", null);
  }

  return (
    <div>
      <form
        onSubmit={async (e) => {
          //   if (password === confirmPassword) {
          //     e.preventDefault();
          //     const result = await createUser(userName, password);
          //     console.log(result.data);
          //     setToken(result.data.token);
          //     localStorage.setItem("token", token);
          //     console.log(result.data.token);
          //   }
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
      </form>
    </div>
  );
}
