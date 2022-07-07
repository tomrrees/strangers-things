import { fetchAllPosts } from "api/post";
import { Post, CreatePost, EditPost } from "components";
import React, { useEffect, useState } from "react";

export default function Posts({ token, postList, setPostList }) {
  // const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const results = await fetchAllPosts(token);
      console.log("results:", results);
      setPostList(results.data.posts);
    };
    getAllPosts();
    console.log("postlist rendering");
  }, []);

  console.log("postList:", postList);

  // useEffect(() => {
  //   postList.map((post) => {
  //     return (
  //       <div>
  //         <Post
  //           key={post.id}
  //           token={token}
  //           post={post}
  //           postList={postList}
  //           setPostList={setPostList}
  //         />
  //       </div>
  //     );
  //   });
  // }, []);

  return (
    <div>
      <CreatePost postList={postList} setPostList={setPostList} token={token} />
      {postList.map((post) => {
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
  );
}
