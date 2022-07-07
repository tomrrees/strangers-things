const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/";

export const createUser = async (username, password) => {
  const response = await fetch(`${url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  })
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log(result);
    // })
    .catch(console.error);
  const result = await response.json();
  // console.log(result);
  return result;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  })
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log(result);
    // })
    .catch(console.error);
  const result = await response.json();
  // console.log("result of login:", result);
  return result;
};

export const fetchMe = async (token) => {
  const response = await fetch(`${url}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};
