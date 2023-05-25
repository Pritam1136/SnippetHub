import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <h1 className="container px-5 py-4 mx-auto text-center text-3xl text-white font-serif pt-8">
        Welcome to SnippetHub - Your ultimate code snippet companion.
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
            SnippetHub is a website where developers can find helpful code
            snippets for React and Tailwind CSS. It serves as a centralized
            space of reusable code blocks to accelerate development and promote
            code reuse(Made by developers for developers).
          </h1>
          <Link to={"/modules"}>
            <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white text-center m-3">
          Why choose SnippetHub?
        </h3>
        <div className="font-mono font-medium text-white m-4 ml-8 text-xl mt-10">
          <p className="my-6 text-left">
            <span className="font-bold font-serif">
              Find Solutions Faster:{" "}
            </span>
            Our powerful search feature allows you to instantly access thousands
            of snippets, making it a breeze to find the code you need, whether
            it's a handy utility function, an elegant algorithm, or a stylish UI
            component.
          </p>
          <p className="my-7 text-left">
            <span className="font-bold font-serif">Foster Collaboration: </span>
            Connect with a vibrant community of like-minded developers, eager to
            share their knowledge and collaborate on exciting projects. Comment,
            rate, and bookmark snippets to engage in meaningful discussions and
            build valuable connections.
          </p>

          <p className="my-7 text-left">
            <span className="font-bold font-serif">Boost Your Skills: </span>
            Learn from the best! SnippetHub is a knowledge hub brimming with
            snippets from diverse programming languages and frameworks. Immerse
            yourself in the collective wisdom of experienced developers, and
            elevate your coding prowess to new heights.
          </p>

          <p className="my-7 text-left">
            <span className="font-bold font-serif">
              {" "}
              Organize and Conquer:{" "}
            </span>
            Effortlessly navigate through our well-structured categories and
            tags, ensuring that you find snippets relevant to your specific
            needs. Whether you're into web development, machine learning, mobile
            apps, or IoT, we have you covered.
          </p>
        </div>
      </div>
      <p className="px-4 text-center mt-32 p-3 pb-4 text-white font-semibold">
        Join our ever-growing community of passonate developers today and
        experience the power of SnippetHub.
      </p>
    </section>
  );
};
