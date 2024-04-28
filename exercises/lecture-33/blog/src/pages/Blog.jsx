import { createContext } from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts";

const BlogContext = createContext("");

export const blogName = "Blog for a test project on React technology";

const Blog = () => {
  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Posts />
      </Layout>
    </BlogContext.Provider>
  );
};

export default Blog;
