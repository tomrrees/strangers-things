const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/";

export const fetchAllPosts = async () => {
  const response = await fetch(`${url}/posts`);
  const result = await response.json();
  return result;
};

export const createPost = async (
  token,
  { title, description, price, willDeliver }
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
