import React from "react";

export default function LogOut({
  setToken,
  setCurrentUser,
  token,
  currentUser,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        localStorage.setItem("token", "");
        let token1 = localStorage.getItem("token");
        console.log("Local Storage Token: ", token1);
        const tempUser = {};
        const tempToken = "";
        setCurrentUser(tempUser);
        setToken(tempToken);
        if (
          token === "" &&
          localStorage.getItem("token") === "" &&
          Object.keys(currentUser).length < 1
        ) {
          console.log("logging out");
          alert("Successfully logged out");
        }
      }}
    >
      <button type="submit">Log Out</button>
    </form>
  );
}
