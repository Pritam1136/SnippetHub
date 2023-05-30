import { Link } from "react-router-dom";

export const ModulesNav = () => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      <div className="h-px w-auto bg-slate-500"></div>
      <h1 className="mx-4 pt-16 text-center text-4xl font-semibold text-white">
        What are you looking for?
      </h1>
      <div className="mt-8 space-y-4">
        <div className="flex justify-center align-middle">
          <div className="space-x-4">
            <Link
              to={"/modules/buttons"}
              className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Buttons
            </Link>
            <Link
              to={"/modules/Cards"}
              className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Cards
            </Link>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <div className="space-x-4">
            <Link
              to={"/modules/headers"}
              className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            >
              Header
            </Link>
            <Link
              to={"/modules/footers"}
              className="inline-flex items-center rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Footer
            </Link>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <div className="space-x-4">
            <Link
              to={"/modules/testimonials"}
              className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            >
              Testimonials
            </Link>
            <Link
              to={"/modules/content"}
              className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
