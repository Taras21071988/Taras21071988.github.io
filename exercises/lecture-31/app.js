const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
  <h3>${item.title}</h3>
  <div>${item.body}</div>
  <p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const xhrPromise = (method, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Something went wrong!");
    };
  });
};

const usersCache = {};

const getUserInfo = async (userId) => {
  if (usersCache[userId]) {
    return usersCache[userId];
  } else {
    const response = await xhrPromise(
      "GET",
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userInfo = JSON.parse(response);
    usersCache[userId] = userInfo;
    return userInfo;
  }
};

xhrPromise("GET", url)
  .then(async (response) => {
    const posts = JSON.parse(response);
    let result = "";
    for (const item of posts) {
      result += template(item);
    }
    document.getElementById("blog").innerHTML = result;

    const authorElements = document.querySelectorAll(".author");
    for (const authorElement of authorElements) {
      const userId = authorElement.dataset.id;
      const userInfo = await getUserInfo(userId);
      authorElement.textContent = userInfo.name;
    }
  })
  .catch((error) => {
    console.error(error);
  });
