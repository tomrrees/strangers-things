import { createPost } from "api/post";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ token, postList, setPostList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState(null);
  const [willDeliver, setWillDeliver] = useState(null);
  let navigate = useNavigate();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const result = await createPost(token, {
          title,
          description,
          price,
          location,
          willDeliver,
        });

        if (result.success) alert("Posted successfully");
        if (!token) alert("You must be logged in to create a post!");

        const newPost = [result.data.post];
        const newList = postList.concat(newPost);

        setPostList(newList);

        //clear fields
        setTitle("");
        setDescription("");
        setPrice("");
        setLocation("");
        setWillDeliver("");
        navigate("/profile");
      }}
    >
      <input
        placeholder="Title"
        value={title}
        required={true}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        required={true}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        required={true}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Location"
        value={location}
        required={false}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        placeholder="Will Deliver"
        value={willDeliver}
        required={false}
        onChange={(e) => setWillDeliver(e.target.value)}
      />
      <button type="submit" disabled={token === null ? true : false}>
        Submit Post
      </button>
    </form>
  );
}
