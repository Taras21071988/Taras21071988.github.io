import "./App.css";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="flex">
      <div id="sidebar" className="flex-">
        <h1 className="text-red-600">My Blog</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search posts"
              placeholder="Search"
              type="search"
              name="q"
              
            />
            <div id="search-spinner" aria-hidden hidden={true} />
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <Blog />
    </div>
  );
}

export default App;
