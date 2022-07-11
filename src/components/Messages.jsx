import React from "react";

export default function Messages({ token, post }) {
  const messageList = post.messages;
  let concerning = post.title;

  return (
    <div>
      Messages:
      <ul>
        {messageList.length > 0 ? (
          messageList.map((message) => {
            return (
              <li>
                Message for post of {concerning}: {message.content}
              </li>
            );
          })
        ) : (
          <li>No messages</li>
        )}
      </ul>
    </div>
  );
}
