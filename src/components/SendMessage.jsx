import React, { useState } from "react";
import { sendMessage } from "api/post";

export default function SendMessage({ token, post }) {
  const id = post._id;
  const [message, setMessage] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await sendMessage(token, message, id);

          if (result.success) {
            alert("Message was posted successfully.");
            setMessage("");
          }
          return result;
        }}
      >
        <input
          placeholder="Message"
          value={message}
          required={true}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit Message</button>
      </form>
    </div>
  );
}
