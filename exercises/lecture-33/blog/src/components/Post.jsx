import { useState, useEffect } from "react";

function Post() {
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(0);

  const fetchData = async () => {
    const response = await (
      await fetch(
        "https://my-json-server.typicode.com/Taras21071988/reactDB/posts/1"
      )
    ).json();
    setPost(response);
  };

  function likeThis() {
    return setLike(like + 1);
  }
  useEffect(() => {
    fetchData();
    const likeButton = document.getElementById("like");
    likeButton.addEventListener("click", likeThis);

    return () => {
      likeButton.removeEventListener("click", likeThis);
    };
  }, []);

  return (
    <article className="post">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>
          {post.title} {post.id}
        </h3>
        <p>{post.content}</p>
        <button id="like">
          Like this post <strong>{like}</strong>
        </button>
      </div>
    </article>
  );
}
export default Post;
