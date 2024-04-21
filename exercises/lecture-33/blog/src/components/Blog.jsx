import { useState } from "react";

/* eslint-disable react/prop-types */
function Blog(props) {
  const [likes, setLikes] = useState(props.post.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <article className="post">
      <div className="cover-container">
        <img src={props.post.cover} alt={props.post.title} />
      </div>
      <div className="post-footer">
        <h3>
          {props.post.title} {props.post.id}
        </h3>
        <p>{props.post.content}</p>

        <button onClick={handleLike}> likes {likes}</button>
      </div>
    </article>
  );
}

export default Blog;
