import React, { useEffect, useState } from "react";
import { Post } from "components";
import { fetchMe } from "api/user";

export default function Profile({ token, postList, setPostList }) {
  // let posts = [];
  // let messages = [];
  // const me = fetchMe(token);
  // console.log("me data:", me);

  // if (me.success) {
  //   posts = me.data.posts;
  //   messages = me.data.messages.content;
  // } else {
  //   console.log("error in me:", me);
  // }

  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMyData = async () => {
      const result = await fetchMe(token);
      console.log("me:", result);
      console.log(result.data);

      if (result.success) {
        const tempPosts = result.data.posts;
        const tempMessages = result.data.messages;
        console.log("Temp Posts:", tempPosts);
        console.log("Temp Messages:", tempMessages);
        setPosts(tempPosts);
        setMessages(tempMessages);
      } else {
        console.log("error in me:", result);
      }
    };
    getMyData();
  }, []);

  return (
    <div>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <Post
                key={post.id}
                token={token}
                post={post}
                postList={postList}
                setPostList={setPostList}
              />
            </div>
          );
        })}
      </div>
      <div>
        {messages.map((message) => {
          return <div>{message.content}</div>;
        })}
      </div>
    </div>
  );
}
