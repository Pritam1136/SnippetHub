import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="h-px w-auto bg-slate-500"></div>
      <h1 className="container mx-auto px-5 py-4 pt-8 text-center font-serif text-3xl text-white">
        Welcome to SnippetHub - Your ultimate code snippet companion.
      </h1>
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-col items-start sm:flex-row sm:items-center lg:w-2/3">
          <h1 className="title-font flex-grow text-2xl font-medium text-white sm:pr-16">
            SnippetHub is a website where developers can find helpful code
            snippets for React and Tailwind CSS. It serves as a centralized
            space of reusable code blocks to accelerate development and promote
            code reuse(Made by developers for developers).
          </h1>
          <Link to={"/modules"}>
            <button className="mt-10 flex-shrink-0 rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none sm:mt-0">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="title-font m-3 flex-grow text-center text-2xl font-medium text-white sm:pr-16">
          Why choose SnippetHub?
        </h3>
        <div className="flex justify-center align-middle">
          <div className="m-4 ml-8 mt-10 max-w-5xl font-mono text-xl font-medium text-white">
            <p className="my-7 ">
              <span className="font-serif font-bold text-indigo-500">
                &bull; Find Solutions Faster:{" "}
              </span>
              Our powerful search feature allows you to instantly access
              thousands of snippets, making it a breeze to find the code you
              need, whether it's a handy utility function, an elegant algorithm,
              or a stylish UI component.
            </p>
            <p className="my-7  text-left">
              <span className="font-serif font-bold text-indigo-500">
                &bull; Faster Collaboration:{" "}
              </span>
              Connect with a vibrant community of like-minded developers, eager
              to share their knowledge and collaborate on exciting projects.
              Comment, rate, and bookmark snippets to engage in meaningful
              discussions and build valuable connections.
            </p>

            <p className="my-7  text-left">
              <span className="font-serif font-bold text-indigo-500">
                {" "}
                &bull; Boost Your Skills:{" "}
              </span>
              Learn from the best! SnippetHub is a knowledge hub brimming with
              snippets from diverse programming languages and frameworks.
              Immerse yourself in the collective wisdom of experienced
              developers, and elevate your coding prowess to new heights.
            </p>

            <p className="my-7  text-left">
              <span className="font-serif font-bold text-indigo-500">
                {" "}
                &bull; Organize and Conquer:{" "}
              </span>
              Effortlessly navigate through our well-structured categories and
              tags, ensuring that you find snippets relevant to your specific
              needs. Whether you're into web development, machine learning,
              mobile apps, or IoT, we have you covered.
            </p>
          </div>
        </div>
      </div>
      <div className="h-px w-auto bg-slate-500"></div>
      <p className="mt-32 p-3 px-4 pb-4 text-center font-semibold text-white">
        Join our ever-growing community of passonate developers today and
        experience the power of SnippetHub.
        <br />
        Made by Pritam Roy.
      </p>
    </section>
  );
};
