export const signInApi = (username, password) => {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};

export const getUserInfoApi = token => {
  return fetch('http://localhost:3000/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then(async response => {
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    console.log(data);
    throw new Error(data.message);
  });
};
