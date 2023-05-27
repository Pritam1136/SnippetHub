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
          <span className="ml-2 text-sm">Add interactive elements</span>
        </Link>
        <Link
          to={"/modules/Cards"}
          className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Cards
          <span className="ml-2 text-sm">
            Display content in a styled container
          </span>
        </Link>
        <Link
          to={"/modules/headers"}
          className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
        >
          Header
          <span className="ml-2 text-sm">
            Design the top section of your page
          </span>
        </Link>
        <Link
          to={"/modules/footers"}
          className="inline-flex items-center rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Footer
          <span className="ml-2 text-sm">Create a footer section</span>
        </Link>
      </div>
    </div>
  );
};
