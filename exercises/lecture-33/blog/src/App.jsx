// import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Post from "./components/Post";

function App() {
  // const [count, setCount] = useState(0);

  let post = {
    id: 1,
    title: "Programming Algorithm",
    content: `The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.`,
    cover: "/vite.svg",
    likes: 5,
  };

  return (
    <>
      <Navbar />
      <Gallery />

      <Blog post={post} key={post.id} />
      <Post />
      <Footer />
    </>
  );
}

export default App;
