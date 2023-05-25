import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">SnippetHub</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-4	md:mr-auto md:border-l md:border-gray-700 md:py-1 md:pl-4">
          <Link className="mr-5 hover:text-white" to="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-white" to="/Docs">
            Docs
          </Link>
          <a
            className="mr-5 hover:text-white"
            href="https://github.com/Pritam1136/SnippetHub.git"
          >
            Github
          </a>
          <a className="mr-5 hover:text-white" href="">
            Discord
          </a>
        </nav>
        <Link to={"/Login"}>
          <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-800 px-3 py-1 text-base hover:bg-gray-700 focus:outline-none md:mt-0">
            LogIn/SignIn
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};
