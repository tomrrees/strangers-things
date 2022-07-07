const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/";

export const fetchAllPosts = async (token) => {
  const response = await fetch(`${url}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();
  return result;
};

export const createPost = async (
  token,
  { title, description, price, location, willDeliver }
) => {
  const response = await fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      // user: {
      //   username,
      //   password,
      // },
      post: {
        title,
        description,
        price,
        location,
        willDeliver,
      },
    }),
  })
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log(result);
    // })
    .catch(console.error);
  const result = await response.json();
  console.log(result);
  return result;
};

export const deletePost = async (token, post) => {
  const id = post._id;
  const response = await fetch(`${url}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log(result);
    //   return result;
    // })
    .catch(console.error);
  const result = await response.json();
  console.log(result);
  return result;
};

export const editPost = async (
  token,
  { title, description, price, location, willDeliver, id }
) => {
  const response = await fetch(`${url}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title,
        description,
        price,
        location,
        willDeliver,
      },
    }),
  }).catch(console.error);
  const result = await response.json();
  console.log(result);
  return result;
};

export const sendMessage = async (token, content, id) => {
  const response = await fetch(`${url}/posts/${id}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: {
        content,
      },
    }),
  }).catch(console.error);
  const result = await response.json();
  console.log(result);
  return result;
};
