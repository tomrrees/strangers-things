import React from "react";

export default function Post({ post }) {
  console.log("Post inside of the post component: ", post);
  return (
    <div>
      <ul>
        <li>Title: {post.title}</li>
        <li>Price: {post.price}</li>
        <li>Description: {post.description}</li>
        <li>
          {/* Location: {post.location} */}
          Location:{" "}
          {post.location === "[On Request]"
            ? "Available upon request."
            : post.location}
        </li>
        <li>Will Deliver: {post.willDeliver ? "Yes" : "No"}</li>
        <li>Messages: {post.isAuthor ? post.messages : "No messages."}</li>
      </ul>
    </div>
  );
}
