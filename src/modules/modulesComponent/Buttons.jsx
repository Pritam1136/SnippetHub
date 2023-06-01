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
    const codeToCopy = `<button>
    <a
      href="#_"
      className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-lg font-medium tracking-tighter text-white"
    >
      <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
      <span className="absolute inset-0 h-full w-full rounded-md bg-white "></span>
      <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
      <span className="relative text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
        Button
      </span>
    </a>
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
    className="rounded-full border border-blue-400 bg-transparent from-blue-500 to-purple-500 px-2 py-4 font-mono font-bold text-white hover:bg-gradient-to-b">
    Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied5(true);
    setTimeout(() => {
      setCopied5(false);
    }, 2000);
  };

  const handleCopy6 = () => {
    const codeToCopy = ` <button
    className="rounded border border-gray-400  px-4 py-2 font-semibold text-white shadow hover:bg-gray-100 hover:text-black"
  >
  Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied6(true);
    setTimeout(() => {
      setCopied6(false);
    }, 2000);
  };

  const handleCopy7 = () => {
    const codeToCopy = ` <button
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5  py-2  text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white"
  >
  Button
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied7(true);
    setTimeout(() => {
      setCopied7(false);
    }, 2000);
  };

  const handleCopy8 = () => {
    const codeToCopy = ` <button>
    <a
      href="#_"
      className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-white px-6 py-3 font-medium transition-all hover:bg-white"
    >
      <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-slate-700 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
        Button
      </span>
    </a>
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied8(true);
    setTimeout(() => {
      setCopied8(false);
    }, 2000);
  };

  const handleCopy9 = () => {
    const codeToCopy = `<button>
    <a
      href="#_"
      className="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-blue-600 px-5 py-3 font-medium transition-all hover:bg-white"
    >
      <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
       Button
      </span>
    </a>
  </button>`;
    navigator.clipboard.writeText(codeToCopy);
    setCopied9(true);
    setTimeout(() => {
      setCopied9(false);
    }, 2000);
  };

  const handleCopy10 = () => {
    const codeToCopy = `<button>
    <a
      href="#_"
      className="group relative rounded-lg px-6 py-3 font-bold text-white"
    >
      <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="relative">Button</span>
    </a>
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
        <button onClick={handleCopy3}>
          <a
            href="#_"
            className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-lg font-medium tracking-tighter text-white"
          >
            <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
            <span className="absolute inset-0 h-full w-full rounded-md bg-white "></span>
            <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
            <span className="relative text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
              {copied3 ? "Copied!" : "Copy Code"}
            </span>
          </a>
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
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-6  py-3  text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white"
          onClick={handleCopy7}
        >
          {copied7 ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="pt-8">
        <button onClick={handleCopy8}>
          <a
            href="#_"
            className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-white px-6 py-3 font-medium transition-all hover:bg-white"
          >
            <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-slate-700 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              {copied8 ? "Copied!" : "Copy Code"}
            </span>
          </a>
        </button>
      </div>
      <div className="pt-8">
        <button onClick={handleCopy9}>
          <a
            href="#_"
            className="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-blue-600 px-5 py-3 font-medium transition-all hover:bg-white"
          >
            <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              {copied9 ? "Copied!" : "Copy Code"}
            </span>
          </a>
        </button>
      </div>
      <div className="pb-8 pt-8">
        <button onClick={handleCopy10}>
          <a
            href="#_"
            className="group relative rounded-lg px-6 py-3 font-bold text-white"
          >
            <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="relative">
              {copied10 ? "Copied!" : "Copy Code"}
            </span>
          </a>
        </button>
      </div>
    </div>
  );
};
