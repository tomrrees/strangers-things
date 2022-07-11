import { fetchAllPosts } from "api/post";
import { fetchMe } from "api/user";
import { Post, CreatePost, EditPost } from "components";
import React, { useEffect, useState } from "react";

export default function Posts({ token, postList, setPostList }) {
  // const [postList, setPostList] = useState([]);
  const me = fetchMe();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const results = await fetchAllPosts(token);
      setPostList(results.data.posts);
      setPostsToDisplay(searchTerm.length > 0 ? filteredPosts : postList);
    };
    getAllPosts();
  }, [filteredPosts]);

  function checkPost(post, text) {
    const title = post.title.toLowerCase();
    const price = post.price.toLowerCase();
    const description = post.description.toLowerCase();
    let location = post.location
      ? post.location.toLowerCase()
      : "available on request";
    let willDeliver = post.willDeliver ? "yes" : "no";
    const username = post.author.username.toLowerCase();
    if (title.includes(text.toLowerCase())) return true;
    if (price.includes(text.toLowerCase())) return true;
    if (description.includes(text.toLowerCase())) return true;
    if (location.includes("request")) {
      location = "available on request";
    }
    if (location.includes(text.toLowerCase())) return true;
    if (willDeliver.includes(text.toLowerCase())) return true;
    if (username.includes(text.toLowerCase())) return true;
    else return false;
  }

  function filterPosts(postList, searchTerm) {
    const result = postList.filter((post) => checkPost(post, searchTerm));
    setFilteredPosts(result);
    console.log("filtered: ", filteredPosts);
  }

  return (
    <div>
      <CreatePost postList={postList} setPostList={setPostList} token={token} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          filterPosts(postList, searchTerm);
        }}
      >
        <input
          placeholder="Search"
          value={searchTerm}
          required={false}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {postsToDisplay.map((post) => {
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
