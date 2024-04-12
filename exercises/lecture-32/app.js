const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
  <h3>${item.title}...</h3>
  <div>${item.body}...</div>
  <p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchPosts = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchUserInfo = async (userId) => {
  try {
    if (usersCache[userId]) {
      return usersCache[userId];
    } else {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }
      const userInfo = await response.json();
      usersCache[userId] = userInfo;
      return userInfo;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const usersCache = {};

(async () => {
  try {
    const posts = await fetchPosts();
    let result = "";
    for (const item of posts) {
      result += template(item);
    }
    document.getElementById("blog").innerHTML = result;

    const authorElements = document.querySelectorAll(".author");
    for (const authorElement of authorElements) {
      const userId = authorElement.dataset.id;
      const userInfo = await fetchUserInfo(userId);
      authorElement.textContent = userInfo.name;
    }
  } catch (error) {
    console.error(error);
  }
})();
