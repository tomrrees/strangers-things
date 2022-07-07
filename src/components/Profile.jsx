import React, { useEffect, useState } from "react";
import { fetchMe } from "api/user";

export default function Profile({ token }) {
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

  useEffect(async () => {
    // let posts = [];
    // let messages = [];
    const me = await fetchMe(token);

    console.log("me data:", me);

    if (me.success) {
      const tempPosts = me.value.data.posts;
      const tempMessages = me.value.data.messages;
      console.log("Temp Posts:", tempPosts);
      console.log("Temp Messages:", tempMessages);
      setPosts(tempPosts);
      setMessages(tempMessages);
    } else {
      console.log("error in me:", me);
    }
    return me;
  }, []);

  // try {
  //   posts = me.value.data.posts;
  //   messages = me.value.data.messages;
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div>
      <div>
        {posts.map((post) => {
          return <div>{post}</div>;
        })}
      </div>
      <div>
        {messages.map((message) => {
          return <div>{message}</div>;
        })}
      </div>
    </div>
  );
}
