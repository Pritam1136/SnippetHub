import React from "react";
import { useState } from "react";

export const Headers = () => {
  return (
    <div className="h-screen bg-slate-900">
      <div className="pt-8">
        <header className="mx-4 bg-blue-500">
          <div className="container mx-auto flex items-center justify-between px-8 py-5">
            <h1 className="text-xl font-bold text-white">
              My Responsive Header
            </h1>
            <nav className="space-x-4">
              <a
                href="#"
                className="text-white transition duration-300 hover:text-blue-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white transition duration-300 hover:text-blue-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-white transition duration-300 hover:text-blue-200"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
      </div>

      <div className="pt-8">
        <header className="mx-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
          <div className="container mx-auto flex items-center justify-between px-8 py-4">
            <h1 className="text-3xl font-bold text-white">
              My Responsive Header
            </h1>
            <nav className="space-x-6">
              <a
                href="#"
                className="text-white transition duration-300 hover:text-pink-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white transition duration-300 hover:text-pink-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-white transition duration-300 hover:text-pink-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white transition duration-300 hover:text-pink-200"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
      </div>
      <div className="pt-8">
        <header className="mx-4 bg-gradient-to-r from-green-400 via-yellow-500 to-red-500">
          <div className="container mx-auto flex items-center justify-between px-8 py-4">
            <h1 className="text-3xl font-bold text-white">
              My Responsive Header
            </h1>
            <nav className="space-x-6">
              <a
                href="#"
                className="text-white transition duration-300 hover:text-yellow-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white transition duration-300 hover:text-yellow-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-white transition duration-300 hover:text-yellow-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white transition duration-300 hover:text-yellow-200"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};
