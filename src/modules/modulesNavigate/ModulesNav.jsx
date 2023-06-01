import { Link } from "react-router-dom";

export const ModulesNav = () => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      <div className="h-px w-auto bg-slate-500"></div>
      <h1 className="mx-4 pt-16 text-center text-4xl font-semibold text-white">
        What are you looking for?
      </h1>
      <div>
        <div className="mt-14">
          <div className="text-center">
            <Link to={"/modules/buttons"}>
              <button>
                <a
                  href="#_"
                  className="group relative rounded-lg px-6 py-3 font-bold text-white"
                >
                  <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="relative">BUTTONS</span>
                </a>
              </button>
            </Link>
          </div>
          <div className="mt-16 text-center">
            <Link to={"/modules/Cards"}>
              <button>
                <a
                  href="#_"
                  className="group relative rounded-lg px-6 py-3 font-bold text-white"
                >
                  <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="relative">CARDS</span>
                </a>
              </button>
            </Link>
          </div>
          <div className="mt-16 text-center">
            <Link to={"/modules/headers"}>
              <button>
                <a
                  href="#_"
                  className="group relative rounded-lg px-6 py-3 font-bold text-white"
                >
                  <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="relative">HEADERS</span>
                </a>
              </button>
            </Link>
          </div>
          <div className="mt-16 text-center">
            <Link to={"/modules/footers"}>
              <button>
                <a
                  href="#_"
                  className="group relative rounded-lg px-6 py-3 font-bold text-white"
                >
                  <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="relative">FOOTERS</span>
                </a>
              </button>
            </Link>
          </div>
          <div className="mt-16 text-center">
            <Link to={"/modules/testimonials"}>
              <button>
                <a
                  href="#_"
                  className="group relative rounded-lg px-6 py-3 font-bold text-white"
                >
                  <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="relative">TESTIMONIALS</span>
                </a>
              </button>
            </Link>
          </div>
          <div className="mt-16 text-center">
            <Link to={"/modules/content"}>
              <button>
                <a
                  href="#_"
                  className="group relative rounded-lg px-6 py-3 font-bold text-white"
                >
                  <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="relative">CONTENTS</span>
                </a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
