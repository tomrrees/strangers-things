import React from "react";

export default function Messages({ token, post }) {
  const messageList = post.messages;

  // if (messageList.length > 0) {
  //   return (
  //     <div>
  //       <ul>
  //         {messageList.map((message) => {
  //           return <li>{message}</li>;
  //         })}
  //       </ul>
  //     </div>
  //   );
  // } else {
  //   // return <div>No Messages.</div>;
  // }
  console.log(messageList);
  return (
    <div>
      <ul>
        {messageList.length > 0 ? (
          messageList.map((message) => {
            return <li>{message}</li>;
          })
        ) : (
          <li>No messages</li>
        )}
      </ul>
    </div>
  );
}
