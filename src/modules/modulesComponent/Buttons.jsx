import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Buttons = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const codeToCopy = `<div> </div>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <h1 className="-mt-96 mb-6 text-3xl font-bold text-white">
        Code Copy Example
      </h1>
      <div className="mt-10 p-7">
        <button
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};
