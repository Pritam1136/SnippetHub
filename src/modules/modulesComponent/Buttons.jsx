import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Buttons = () => {
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [copied4, setCopied4] = useState(false);
  const [copied5, setCopied5] = useState(false);
  const [copied6, setCopied6] = useState(false);
  const [copied7, setCopied7] = useState(false);
  const [copied8, setCopied8] = useState(false);
  const [copied9, setCopied9] = useState(false);
  const [copied10, setCopied10] = useState(false);

  const handleCopy = () => {
    const codeToCopy = `<button
    className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
  >
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleCopy2 = () => {
    const codeToCopy = `<button className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-105">
     Button
    </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied2(true);
    setTimeout(() => {
      setCopied2(false);
    }, 2000);
  };

  const handleCopy3 = () => {
    const codeToCopy = `<button
    className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4  py-2 font-bold text-white transition-transform duration-300 hover:scale-105" >
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied3(true);
    setTimeout(() => {
      setCopied3(false);
    }, 2000);
  };

  const handleCopy4 = () => {
    const codeToCopy = `<div className="pt-8">
    <button
      className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
    >
      Button
    </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied4(true);
    setTimeout(() => {
      setCopied4(false);
    }, 2000);
  };

  const handleCopy5 = () => {
    const codeToCopy = `<button
    className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4  py-2 font-bold text-white transition-transform duration-300 hover:scale-105" >
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied5(true);
    setTimeout(() => {
      setCopied5(false);
    }, 2000);
  };

  const handleCopy6 = () => {
    const codeToCopy = `<button
    className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4  py-2 font-bold text-white transition-transform duration-300 hover:scale-105" >
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied6(true);
    setTimeout(() => {
      setCopied6(false);
    }, 2000);
  };

  const handleCopy7 = () => {
    const codeToCopy = `<button
    className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4  py-2 font-bold text-white transition-transform duration-300 hover:scale-105" >
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied7(true);
    setTimeout(() => {
      setCopied7(false);
    }, 2000);
  };

  const handleCopy8 = () => {
    const codeToCopy = `<button
    className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4  py-2 font-bold text-white transition-transform duration-300 hover:scale-105" >
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied8(true);
    setTimeout(() => {
      setCopied8(false);
    }, 2000);
  };

  const handleCopy9 = () => {
    const codeToCopy = `<button
    className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4  py-2 font-bold text-white transition-transform duration-300 hover:scale-105" >
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied9(true);
    setTimeout(() => {
      setCopied9(false);
    }, 2000);
  };

  const handleCopy10 = () => {
    const codeToCopy = `<button
    className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4  py-2 font-bold text-white transition-transform duration-300 hover:scale-105" >
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied10(true);
    setTimeout(() => {
      setCopied10(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <h1 className="mb-10 mt-10 text-3xl font-bold text-white">
        Code Copy Example
      </h1>
      <div className="mt-10 ">
        <button
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button
          className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 font-bold text-white transition-transform duration-300 hover:scale-105"
          onClick={handleCopy2}
        >
          {copied2 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button
          className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4  py-2 font-bold text-white transition-transform duration-300 hover:scale-105"
          onClick={handleCopy3}
        >
          {copied3 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-4 font-bold text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
          onClick={handleCopy4}
        >
          {copied4 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button
          className="rounded-full border border-blue-400 bg-transparent from-blue-500 to-purple-500 px-2 py-4 font-mono font-bold text-white hover:bg-gradient-to-b"
          onClick={handleCopy5}
        >
          {copied5 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button
          className="rounded border border-gray-400  px-4 py-2 font-semibold text-white shadow hover:bg-gray-100 hover:text-black"
          onClick={handleCopy6}
        >
          {copied6 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5  py-2  text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white"
          onClick={handleCopy7}
        >
          {copied7 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button
          className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 font-bold text-white transition-transform duration-300 hover:scale-105"
          onClick={handleCopy8}
        >
          {copied8 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button
          className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 font-bold text-white transition-transform duration-300 hover:scale-105"
          onClick={handleCopy9}
        >
          {copied9 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pb-4 pt-8">
        <button
          className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 font-bold text-white transition-transform duration-300 hover:scale-105"
          onClick={handleCopy10}
        >
          {copied10 ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};
