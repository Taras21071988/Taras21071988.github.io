import { useContext } from "react";
import { PostContext } from "./Post";

const PostTitle = () => {
  const post = useContext(PostContext);
  return <h1>{post.title}</h1>;
};

export default PostTitle;
