import { createPost } from "api/post";
import React, { useState } from "react";

export default function CreatePost({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState(null);
  const [willDeliver, setWillDeliver] = useState(null);

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

        if (result) alert("Posted successfully");
        console.log(result);
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
      <button type="submit">Submit Post</button>
    </form>
  );
}
