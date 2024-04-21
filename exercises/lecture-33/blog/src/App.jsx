// import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
