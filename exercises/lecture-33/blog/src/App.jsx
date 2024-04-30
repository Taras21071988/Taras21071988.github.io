import "./App.css";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div
      className="flex container mx-auto py-5  gap-5
    "
    >
      <div
        id="sidebar"
        className="flex flex-col gap-5 rounded-3xl bg-slate-100 p-5"
      >
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
          <ul className="flex flex-col gap-2">
            <li>
              <Link to={"blog"}>Blog</Link>
            </li>
            <li>
              <Link to={`about`}>About</Link>
            </li>
            <li>
              <Link to={`contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
