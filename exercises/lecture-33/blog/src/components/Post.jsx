/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState, useEffect } from "react";
import Layout from "./Layout";

export const PostContext = createContext("");
// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//     </div>
//   );
// };
// const PostMain = () => {
//   const post = useContext(PostContext);
//   return <main>{post.content}</main>;
// };

// const PostTitle = () => {
//   const post = useContext(PostContext);
//   return <h1>{post.title}</h1>;
// };
// const Header = () => {
//   return (
//     <header className="header">
//       <PostTitle />
//       <PostMain />
//     </header>
//   );
// };

const Post = () => {
  const [post, setPost] = useState([]);

  const fetchData = async () => {
    const response = await (
      await fetch(
        "https://my-json-server.typicode.com/Taras21071988/reactDB/posts/1"
      )
    ).json();
    setPost(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PostContext.Provider value={post}>
      <Layout></Layout>
    </PostContext.Provider>
  );
};
export default Post;
