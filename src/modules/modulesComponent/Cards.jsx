import React from "react";
import { useState } from "react";

export const Cards = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <div className="mx-4 px-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <img
              className="h-48 w-full object-cover sm:h-56 md:h-64"
              src="https://dummyimage.com/500x300"
              srcSet="
            https://dummyimage.com/500x300 500w,
            https://dummyimage.com/400x240 400w,
            https://dummyimage.com/300x180 300w"
              sizes="(max-width: 640px) 300px,
            (max-width: 768px) 400px,
            500px"
              alt="Card 1"
            />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">Card 1 Title</h3>
              <p className="text-gray-700">Card 1 description goes here.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <img
              className="h-56 w-full object-cover sm:h-64 md:h-48"
              src="https://dummyimage.com/500x400"
              srcSet="
            https://dummyimage.com/500x400 500w,
            https://dummyimage.com/400x320 400w,
            https://dummyimage.com/300x240 300w"
              sizes="(max-width: 640px) 300px,
            (max-width: 768px) 400px,
            500px"
              alt="Card 2"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Card 2 Title</h3>
              <p className="text-gray-700">Card 2 description goes here.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-xl">
            <img
              className="h-64 w-full object-cover sm:h-48 md:h-56"
              src="https://dummyimage.com/500x350"
              srcSet="
            https://dummyimage.com/500x350 500w,
            https://dummyimage.com/400x280 400w,
            https://dummyimage.com/300x210 300w"
              sizes="(max-width: 640px) 300px,
            (max-width: 768px) 400px,
            500px"
              alt="Card 3"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Card 3 Title</h3>
              <p className="text-gray-700">Card 3 description goes here.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-56 w-full bg-gray-400"></div>
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">Card 4 Title</h3>
              <p className="text-gray-700">Card 4 description goes here.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-64 w-full bg-gray-300"></div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Card 5 Title</h3>
              <p className="text-gray-700">Card 5 description goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
