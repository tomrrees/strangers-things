import React from "react";
import DeletePost from "./DeletePost";
import Messages from "./Messages";
import EditPost from "./EditPost";
import SendMessage from "./SendMessage";

export default function Post({ token, post, postList, setPostList }) {
  return (
    <div>
      <ul>
        <li>Title: {post.title}</li>
        <li>Price: {post.price}</li>
        <li>Description: {post.description}</li>
        <li>
          Location:{" "}
          {post.location === "[On Request]"
            ? "Available upon request."
            : post.location}
        </li>
        <li>Will Deliver: {post.willDeliver ? "Yes" : "No"}</li>
      </ul>
      {!post.isAuthor ? <Messages token={token} post={post} /> : null}
      {!post.isAuthor ? (
        <DeletePost
          token={token}
          post={post}
          postList={postList}
          setPostList={setPostList}
        />
      ) : null}
      {!post.isAuthor ? (
        <EditPost
          token={token}
          post={post}
          postList={postList}
          setPostList={setPostList}
        />
      ) : null}

      {post.isAuthor ? <SendMessage token={token} post={post} /> : null}
    </div>
  );
}
