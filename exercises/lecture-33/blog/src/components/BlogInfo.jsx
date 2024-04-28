import { useContext } from "react";
import { blogName } from "../pages/Blog";

const BlogInfo = () => {
  useContext(blogName);

  return <h1 className="text-center text-3xl">{blogName}</h1>;
};

export default BlogInfo;
