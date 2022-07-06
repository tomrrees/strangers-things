import { fetchAllPosts } from "api/post";
import { Post, CreatePost } from "components";
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
    //console.log(postList.data.posts);
  }, []);

  console.log("postList:", postList);

  return (
    <div>
      <CreatePost postList={postList} setPostList={setPostList} token={token} />
      {postList.map((post, index) => {
        return (
          <div>
            <Post key={post.id} post={post} />
          </div>
        );
      })}
    </div>
  );
}
