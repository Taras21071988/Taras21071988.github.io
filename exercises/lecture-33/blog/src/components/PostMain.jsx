import { useContext } from "react";
import { PostContext } from "./Post";

const PostMain = () => {
  const post = useContext(PostContext);
  return <main>{post.content}</main>;
};

export default PostMain;
