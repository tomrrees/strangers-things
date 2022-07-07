import React from "react";

export default function Messages({ token, post }) {
  const messageList = post.messages;

  console.log(messageList);

  function displayMessageList() {
    if (messageList.length > 0) {
      messageList.map((message) => {
        return <li>{message}</li>;
      });
    } else {
      return <li>No messages</li>;
    }
    console.log(messageList);
  }

  return (
    <div>
      Messages:
      <ul>
        {messageList.length > 0 ? (
          messageList.map((message) => {
            return <li>{message.content}</li>;
          })
        ) : (
          <li>No messages</li>
        )}
      </ul>
    </div>
  );
}
