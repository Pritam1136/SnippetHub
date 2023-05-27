import { Link } from "react-router-dom";

export const ModulesNav = () => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      <h1 className="text-white">What are you looking for?</h1>
      <div className="mt-8 space-y-4">
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
  );
};
